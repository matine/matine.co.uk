import React from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import * as actions from './actions';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './Routing';

class App extends React.Component {

    state = {
        globalContent: null,
        workContent: null,
        projects: [],
    }

    componentWillMount() {
        this.getUiContent();
    }

    getUiContent() {
        Prismic.api(PrismicConfig.apiEndpoint).then(api => {
            if (api) {
                api.query('').then(response => {
                    let projects = [];

                    response.results.map((doc, index) => {
                        if (doc.type === 'global') {
                            this.setState({ globalContent: doc });
                        }
                        if (doc.type === 'project') {
                            projects.push(doc);
                        }
                    });

                    this.setState({ projects: projects });
                });
            }
        });
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        if (!this.state.globalContent || !this.state.projects) {
            return <h1>Loading...</h1>;
        }

        const globalContent = this.state.globalContent.data;
        const projects = this.state.projects;

        return (
            <div>
                <Header globalContent={ globalContent } />
                <Routing globalContent={ globalContent } projects={ projects } />
                <Footer globalContent={ globalContent } />
            </div>
        );
    }
}

App.propTypes = {
    ui: PropTypes.shape(),
    setUiState: PropTypes.func,
};

App.defaultProps = {
    ui: null,
    setUiState: () => {},
};

const mapStateToProps = state => ({
    ui: state.ui,
});

const mapDispatchToProps = dispatch => ({
    setUiState: ui => dispatch(actions.setUiState(ui)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

