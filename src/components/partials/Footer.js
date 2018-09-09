import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Scroll from 'react-scroll';
import { RichText } from 'prismic-reactjs';
import { LinkedInIcon, TwitterIcon, GithubIcon, EmailIcon, ThemeInverted, TextWrap, List, Box, Container, TextWrapMd } from '../ui';
import links from '../../constants/links';

class Footer extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const {
            globalContent,
        } = this.props;

        const scroll = Scroll.animateScroll;

        return (
            <ThemeInverted color svg links>
                <Box width={ 1 } position="fixed" bottom={ 0 } left={ 0 } zIndex={ 0 } py={[ 4, 4, 5]}>
                    <Container>
                        <TextWrapMd textAlign="center">
                            <Box mb={ 3 }>
                                <button
                                    onClick={ scroll.scrollToTop }
                                    className="font-weight-bold font-uppercase hover hover--arrow"
                                >
                                    <span className="block font-size-lg hover__text hover--arrow__arrow">&uarr;</span>
                                    <span className="hover__text">Top</span>
                                </button>
                            </Box>
                            <Box mb={ 3 }>
                                { RichText.render(globalContent.footer_text) }
                            </Box>
                            <TextWrap linkStyle="none">
                                <List linkStyle="inline">
                                    <li>
                                        <a href={ links.linkedIn } className="hover hover--big hover--header-social" target="blank">
                                            <LinkedInIcon />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ links.twitter } className="hover hover--big hover--header-social" target="blank">
                                            <TwitterIcon />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ links.github } className="hover hover--big hover--header-social" target="blank">
                                            <GithubIcon />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ links.email } className="hover hover--big hover--header-social" target="blank">
                                            <EmailIcon />
                                        </a>
                                    </li>
                                </List>
                            </TextWrap>
                        </TextWrapMd>
                    </Container>
                </Box>
            </ThemeInverted>
        );
    }
}

Footer.propTypes = {
    globalContent: PropTypes.shape(),
};

Footer.defaultProps = {
    globalContent: null,
};

const mapStateToProps = state => ({
    globalContent: state.content.global,
});

export default connect(mapStateToProps)(Footer);
