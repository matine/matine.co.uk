import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import LinksPage from './pages/LinksPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';

class Routing extends React.Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return (
            <Switch>
                <Redirect
                    exact
                    from='/'
                    to='/work'
                />
                <Route
                    exact
                    path='/work'
                    component={ ProjectsPage }
                />
                <Route
                    path='/work/:uid'
                    component={ ProjectPage }
                />
                <Route
                    path='/about'
                    component={ AboutPage }
                />
                <Route
                    path='/links'
                    component={ LinksPage }
                />
            </Switch>
        );
    }
}

export default Routing;
