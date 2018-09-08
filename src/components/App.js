import React from 'react';
import Prismic from 'prismic-javascript';
import PrismicConfig from '../prismic-configuration';
import { ThemeProvider } from 'styled-components';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import * as actions from '../state/actions';
import Loading from './partials/Loading';
import Header from './partials/Header';
import Footer from './partials/Footer';
import Routing from './Routing';
import { AppWrap, BackgroundMain } from './ui';

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
            setContent,
            setIsLoading,
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

                        return true;
                    });
                }).then(response => {
                    content.projects.sort((a, b) => {
                        return b.data.project_order - a.data.project_order;
                    })
                    setContent(content);
                    setIsLoading(false);
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
            theme,
        } = this.props;

        if (ui.isLoading) {
            return <Loading />;
        }

        console.log(theme);

        return (
            <ThemeProvider theme={{ mode: theme }}>
                <AppWrap>
                    <div className="app-wrapper">
                        <Loading />
                        <Header />
                        <BackgroundMain>
                            <main className="main b-a-frame b-b-none pos-rel z-index-1">
                                <Routing />
                            </main>
                        </BackgroundMain>
                        <Footer />
                    </div>
                </AppWrap>
            </ThemeProvider>
        );
    }
}

App.propTypes = {
    ui: PropTypes.shape(),
};

App.defaultProps = {
    ui: null,
};

const mapStateToProps = state => ({
    ui: state.ui,
    theme: state.theme,
});

const mapDispatchToProps = dispatch => ({
    setContent: content => dispatch(actions.setContent(content)),
    setIsLoading: isLoading => dispatch(actions.setIsLoading(isLoading)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
