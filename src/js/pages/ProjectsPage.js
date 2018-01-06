import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

class ProjectsPage extends Component {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            thumbnailVisible: false,
        }
    }

    /**
     * Renders the project list items.
     *
     * @return {XML}
     */
    renderProjectListItems() {
        const {
            projectsContent,
        } = this.props;

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
                            className="width-100"
                        />
                        <img
                            className={ this.state.thumbnailVisible ? "width-100 pos-abs pin-top-left thumbnail-2" : "width-100 pos-abs pin-top-left thumbnail-2 hidden"}
                            src={ projectData.project_thumbnail_2.url }
                            alt={ projectData.project_thumbnail_2.alt }
                        />
                        <div className="hidden">
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
        if (!this.props.projectsContent) {
            return null;
        }

        return (
            <div id="projects-page" className="container text-centre">
                <div className="grid grid--gutter-none">
                    { this.renderProjectListItems() }
                </div>
            </div>
        )
    }

    /**
     * Things to do after the component mounts.
     *
     */
    componentDidMount() {
        this.scrollEvents();
    }

    /**
     * Scroll events.
     *
     * @return {Void}
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
}

ProjectsPage.propTypes = {
    globalContent: PropTypes.shape().isRequired,
    projectsContent: PropTypes.array.isRequired,
};

export default ProjectsPage;
