import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class WorkPage extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        if (!this.props.projectsContent) {
            return null;
        }

        const projectsContent = this.props.projectsContent;

        const projectsListed = projectsContent.map((project, index) => {
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
    projectsContent: PropTypes.array.isRequired,
};

export default WorkPage;
