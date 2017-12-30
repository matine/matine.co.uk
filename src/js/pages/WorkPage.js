import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class WorkPage extends Component {

    state = {
        globalContent: null,
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const projects = this.props.projects;

        if (!projects) {
            return null;
        }

        const projectsListed = projects.map((project, index) => {
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
    projects: PropTypes.array.isRequired,
};

export default WorkPage;
