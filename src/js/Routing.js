import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import LinksPage from './pages/LinksPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';

class Routing extends React.Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const globalContent = this.props.globalContent;
        const projectsContent = this.props.projectsContent;

        const Work = () => (
            <Switch>
                <Route exact path='/work' render={ props => ( <WorkPage { ...props } globalContent={ globalContent } projectsContent={ projectsContent } /> )} />
                <Route path='/work/:uid' render={ props => ( <ProjectPage { ...props } globalContent={ globalContent } projectsContent={ projectsContent } /> )} />
            </Switch>
        )

        return (
            <Switch>
                <Redirect exact from='/' to='/work' />
                <Route path='/work' component={ Work } />
                <Route path='/about' render={ props => ( <AboutPage { ...props } globalContent={ globalContent } /> )} />
                <Route path='/links' render={ props => ( <LinksPage { ...props } globalContent={ globalContent } /> )} />
            </Switch>
        );
    }
}

Routing.propTypes = {
    projectsContent: PropTypes.array.isRequired,
    globalContent: PropTypes.shape().isRequired,
};

export default Routing;
