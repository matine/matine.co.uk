import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class WorkPage extends Component {
    /**
     * Renders the project list items.
     *
     * @return {XML}
     */
    renderProjectListItems() {
        const {
            projectsContent,
        } = this.props;

        return projectsContent.map((project, index) => {
            return (
                <li key={ index }>
                    <Link to={ `/work/${project.uid}` }>
                        { project.uid }
                    </Link>
                </li>
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

        return <ul>{ this.renderProjectListItems() }</ul>
    }
}

WorkPage.propTypes = {
    globalContent: PropTypes.shape().isRequired,
    projectsContent: PropTypes.array.isRequired,
};

export default WorkPage;
