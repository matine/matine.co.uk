import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { Link } from 'react-router-dom';

class WorkPage extends Component {

    state = {
        globalContent: null,
        workContent: null,
    }

    componentWillMount() {
        this.fetchWorkContent();
    }

    /**
     * Fetch work content from Prismic and save to state.
     *
     * @return {void}
     */
    fetchWorkContent() {
        Prismic.api(PrismicConfig.apiEndpoint).then(api => {
            api.query(Prismic.Predicates.at('document.type', 'project')).then(response => {
                if (response) {
                    this.setState({ workContent: response });
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
        const workContent = this.state.workContent;

        if (!workContent) {
            return null;
        }

        const projectsListed = workContent.results.map((project, index) => {
            return (
                <li key={ index }><Link to={ `/work/${project.uid}` }>{ project.uid }</Link></li>
            );
        });

        return (
            <ul>
                { projectsListed }
            </ul>
        )
    }
}

WorkPage.propTypes = {
    globalContent: PropTypes.shape().isRequired,
};

export default WorkPage;
