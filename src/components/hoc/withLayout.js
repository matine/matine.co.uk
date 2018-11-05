import React, { Component } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { connect } from 'react-redux';
import * as actions from '../../state/actions';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { ThemeDefault, ThemeInverted, Box } from '../ui';
import globalStyles from '../ui/globalStyles';
import printStyles from '../ui/printStyles';

injectGlobal`
    ${styledNormalize}
    ${globalStyles}
    ${printStyles}
`

export default function (WrappedComponent) {
    class Layout extends Component {
        /**
         * Constructing the Layout component.
         *
         * @return {void}
         */
        constructor(props) {
            super(props);

            this.state = {
                footerHeight: 0,
            }
        }

        /**
         * Things to do after the component renders.
         *
         * @return {void}
         */
        componentDidMount() {
            const footerHeight = document.getElementById('footer').clientHeight;

            this.setState({
                footerHeight,
            })
        }

        /**
         * Renders the component.
         *
         * @return {XML}
         */
        render() {
            const {
                theme,
            } = this.props;

            const {
                footerHeight,
            } = this.state;

            return (
                <ThemeProvider theme={{ mode: theme }}>
                    <ThemeInverted themeBg>
                        <ThemeDefault themeColor themeSvg height="100%">
                            <Header />
                            <Box zIndex={ 1 } position="relative" pt={ [25, 25, 25, 40] } mb={ footerHeight } className="no-margin-for-print">
                                <ThemeDefault themeBg themeBorder className="no-border-for-print">
                                    <WrappedComponent { ...this.props } />
                                </ThemeDefault>
                            </Box>
                            <Footer />
                        </ThemeDefault>
                    </ThemeInverted>
                </ThemeProvider>
            );
        }
    }

    const mapStateToProps = state => ({
        theme: state.theme,
    });

    const mapDispatchToProps = dispatch => ({
        setContent: content => dispatch(actions.setContent(content)),
        setIsLoading: isLoading => dispatch(actions.setIsLoading(isLoading)),
    });

    return connect(mapStateToProps, mapDispatchToProps)(Layout);
}