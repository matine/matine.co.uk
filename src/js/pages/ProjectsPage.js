import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';

class ProjectsPage extends Component {
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
                    className="grid__col grid__col-md-4"
                >
                    <Link to={ `/work/${project.uid}` }>
                        <img
                            src={ projectData.project_thumbnail.url }
                            alt={ projectData.project_thumbnail.alt }
                            className="width-100"
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
     * Scroll points.
     *
     * @return {Void}
     */
    scrollEvents() {
        let scroll1 = 100;
        let scroll2 = 200;
        let scroll3 = 300;

        window.onscroll = () => {
            if ((window.pageYOffset > scroll1) && (window.pageYOffset < scroll2)) {
                this.thumbnailVisibility(false);
            } else if ((window.pageYOffset > scroll2) && (window.pageYOffset < scroll3)) {
                this.thumbnailVisibility(true);
            } else if (window.pageYOffset > scroll3) {
                scroll1 += 200;
                scroll2 += 200;
                scroll3 += 200;
            }
        };
    }

    /**
     * Shows or hides thumbnails.
     *
     * @param {Boolean} show
     * @return {Void}
     */
    thumbnailVisibility(show) {
        if (show) {
            console.log('show');
        } else {
            console.log('hide');
        }
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

        this.scrollEvents();

        return (
            <div className="container text-centre">
                <div className="grid grid--gutter-none">
                    { this.renderProjectListItems() }
                </div>
            </div>
        )
    }
}

ProjectsPage.propTypes = {
    globalContent: PropTypes.shape().isRequired,
    projectsContent: PropTypes.array.isRequired,
};

export default ProjectsPage;
