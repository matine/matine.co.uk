import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import Loading from '../partials/Loading';

class ProjectsPage extends Component {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            thumbnailVisible: false,
            numImagesLoaded: 1,
        }
    }

    /**
     * Handles when an image thumbnail is loaded.
     *
     * @return {void}
     */
    handleImageLoaded() {
        const numOfImages = this.props.content.projects.length;

        this.setState({ numImagesLoaded: this.state.numImagesLoaded + 1 });

        if (this.state.numImagesLoaded === numOfImages) {
            this.setState({ isLoading: false });
            this.scrollEvents();
        }
    }

    /**
     * Scroll events.
     *
     * @return {void}
     */
    scrollEvents() {
        const pageHeight = document.getElementById('projects-page').getBoundingClientRect().height;
        const iterationAmount = 50;
        const numberOfTimes = Math.floor(pageHeight / iterationAmount);

        let scrollArray = [];

        for (var i = 0; i < numberOfTimes; i++) {
            let j = i++;

            scrollArray.push({
                end: iterationAmount * i,
                start: iterationAmount * j,
            });
        };

        window.onscroll = () => {
            scrollArray.forEach((scrollNumbers, index) => {
                const start = scrollNumbers.start;
                const end = scrollNumbers.end;
                const offset = window.pageYOffset;

                if (index % 2) {
                    if (offset > start && offset < end)
                        this.setState({thumbnailVisible: true});
                } else {
                    if (offset > start && offset < end)
                        this.setState({thumbnailVisible: false});
                }
            });
        };
    }

    /**
     * Renders the project list items.
     *
     * @return {XML}
     */
    renderProjectListItems() {
        const projectsContent = this.props.content.projects;

        // Sort in decending order
        projectsContent.sort((a, b) => {
            return b.data.project_order - a.data.project_order;
        })

        return projectsContent.map((project, index) => {
            const projectData = project.data;

            return (
                <div
                    key={ index }
                    className="grid__col grid__col-md-4 pos-rel"
                >
                    <Link
                        to={ `/work/${project.uid}` }>
                        <img
                            src={ projectData.project_thumbnail.url }
                            alt={ projectData.project_thumbnail.alt }
                            onLoad={this.handleImageLoaded.bind(this)}
                            className="width-100"
                        />
                        <img
                            className={ this.state.thumbnailVisible ? "width-100 pos-abs pin-top-left thumbnail-2" : "width-100 pos-abs pin-top-left thumbnail-2 hidden"}
                            src={ projectData.project_thumbnail_2.url }
                            alt={ projectData.project_thumbnail_2.alt }
                        />
                        <div className="width-100 pos-abs pin-bottom-left text-centre remove-link-styles hidden">
                            { RichText.render(projectData.project_title) }
                        </div>
                    </Link>
                </div>
            );
        });
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const globalContent = this.props.content.global;

        return (
            <div id="projects-page" className="container text-centre">
                <Loading isLoading={ this.state.isLoading } />
                <div className="p-t-xxl m-b-xl">
                    { RichText.render(globalContent.site_title) }
                </div>
                <div className="grid grid--gutter-none">
                    { this.renderProjectListItems() }
                </div>
            </div>
        )
    }
}

ProjectsPage.propTypes = {
    content: PropTypes.shape(),
};

ProjectsPage.defaultProps = {
    content: null,
};

const mapStateToProps = state => ({
    content: state.content,
});

export default connect(mapStateToProps)(ProjectsPage);
