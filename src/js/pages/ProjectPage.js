import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
        const projectsContent = this.props.content.projects;

        projectsContent
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
            <div className="container text-centre">
                <h1>{ RichText.render(projectContent.project_title) }</h1>
            </div>
        );
    }
}

ProjectPage.propTypes = {
    content: PropTypes.shape(),
};

ProjectPage.defaultProps = {
    content: null,
};

const mapStateToProps = state => ({
    content: state.content,
});

export default connect(mapStateToProps)(ProjectPage);
