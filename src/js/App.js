import React from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import * as actions from './actions';
import Header from './components/Header';
import Footer from './components/Footer';
import Routing from './components/Routing';

class App extends React.Component {
    /**
     * Things to do before the component renders.
     *
     * @return {void}
     */
    componentWillMount() {
        this.getPrismicContent();
    }

    /**
     * Get content from Prismic and save to the store.
     *
     * @return {void}
     */
    getPrismicContent() {
        let content = {
            global: null,
            projects: [],
        }

        const queryOptions = {
            pageSize: 30,
        };

        Prismic.api(PrismicConfig.apiEndpoint).then(api => {
            if (api) {
                api.query('', queryOptions).then(response => {
                    response.results.map((doc, index) => {
                        console.log(doc.type);
                        if (doc.type === 'global') {
                            content.global = doc.data;
                        }
                        if (doc.type === 'project') content.projects.push(doc);
                    });
                }).then(response => {
                    this.props.setContentState(content);
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
        const {
            content,
        } = this.props;

        if (!content.global || !content.projects) {
            return <h1>Loading...</h1>;
        }

        const globalContent = content.global;
        const projectsContent = content.projects;

        return (
            <div>
                <Header
                    globalContent={ globalContent }
                />
                <Routing
                    globalContent={ globalContent }
                    projectsContent={ projectsContent }
                />
                <Footer
                    globalContent={ globalContent }
                />
            </div>
        );
    }
}

App.propTypes = {
    content: PropTypes.shape(),
    setContentState: PropTypes.func,
};

App.defaultProps = {
    content: null,
    setContentState: () => {},
};

const mapStateToProps = state => ({
    content: state.content,
});

const mapDispatchToProps = dispatch => ({
    setContentState: content => dispatch(actions.setContentState(content)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
