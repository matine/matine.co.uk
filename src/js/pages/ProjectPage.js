import React, { Component } from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
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
        Prismic.api(PrismicConfig.apiEndpoint).then(api => {
            api.getByUID('project', this.props.match.params.uid).then(response => {
                if (response) {
                    this.setState({ projectContent: response.data });
                }
            });
        });
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
                <h1>{ RichText.render(projectContent.project_title)}</h1>
            </div>
        );
    }
}

ProjectPage.propTypes = {
    globalContent: PropTypes.shape().isRequired,
};

export default ProjectPage;
