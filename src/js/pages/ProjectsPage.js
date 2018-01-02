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
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        if (!this.props.projectsContent) {
            return null;
        }

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
