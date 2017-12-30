import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

class ProjectPage extends Component {

    state = {
        projectContent: null,
    }

    componentWillMount() {
        this.fetchProjectContent();
    }

    fetchProjectContent() {
        this.props.projects
            .filter(project => project.uid === this.props.match.params.uid)
            .map((project, index) => this.setState({ projectContent: project }));
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const projectContent = this.state.projectContent;

        if (!projectContent) {
            return null;
        }

        return (
            <div>
                <h1>{ RichText.render(projectContent.data.project_title) }</h1>
            </div>
        );
    }
}

ProjectPage.propTypes = {
    globalContent: PropTypes.shape().isRequired,
    projects: PropTypes.array.isRequired,
};

export default ProjectPage;
