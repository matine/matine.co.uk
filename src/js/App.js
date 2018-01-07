import React from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from './prismic-configuration';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import * as actions from './actions';
import Loading from './components/Loading';
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
        const {
            dispatch,
        } = this.props;

        let content = {
            global: null,
            projects: [],
        }

        Prismic.api(PrismicConfig.apiEndpoint).then(api => {
            if (api) {
                api.query('', { pageSize: 30 }).then(response => {
                    response.results.map((doc, index) => {
                        if (doc.type === 'global') {
                            content.global = doc.data;
                        }
                        if (doc.type === 'project') content.projects.push(doc);
                    });
                }).then(response => {
                    dispatch(actions.setContent(content));
                    dispatch(actions.setIsLoading(false));
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
            ui,
        } = this.props;

        if (ui.isLoading) {
            return <Loading />;
        }

        return (
            <div>
                <Header />
                <main className="bg-texture b-a-frame b-b-none pos-rel z-index-1 m-b-xxl p-t-xxl">
                    <Routing />
                </main>
                <Footer />
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func,
    ui: PropTypes.shape(),
};

App.defaultProps = {
    dispatch: () => {},
    ui: null,
};

const mapStateToProps = state => ({
    ui: state.ui,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
