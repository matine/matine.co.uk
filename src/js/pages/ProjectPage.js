import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

class ProjectPage extends Component {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            projectContent: null,
        }
    }

    /**
     * Things to do before the component renders.
     *
     * @return {void}
     */
    componentWillMount() {
        this.getProjectContent();
    }

    /**
     * Gets the current project content from the array of projects and saves to state.
     *
     * @return {void}
     */
    getProjectContent() {
        this.props.projectsContent
            .filter(project => project.uid === this.props.match.params.uid)
            .map((project, index) => this.setState({ projectContent: project }));
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        if (!this.state.projectContent) {
            return null;
        }

        const projectContent = this.state.projectContent.data;

        return (
            <div>
                <h1>{ RichText.render(projectContent.project_title) }</h1>
            </div>
        );
    }
}

ProjectPage.propTypes = {
    projectsContent: PropTypes.array.isRequired,
};

export default ProjectPage;
