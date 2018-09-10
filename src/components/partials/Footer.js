import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Scroll from 'react-scroll';
import { RichText } from 'prismic-reactjs';
import { LinkedInIcon, TwitterIcon, GithubIcon, EmailIcon, ThemeInverted, TextWrap, List, Box, Container, TextWrapMd, LinkHover, ButtonHover, Text, TextMd, SvgWrap } from '../ui';
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
            <ThemeInverted className="hide-for-print" themeColor themeSvg themeLinks>
                <Box width={ 1 } position="fixed" bottom={ 0 } left={ 0 } zIndex={ 0 } py={[ 4, 4, 5]}>
                    <Container>
                        <TextWrapMd textAlign="center" linkStyle="default">
                            <Box mb={ 3 }>
                                <ButtonHover
                                    onClick={ scroll.scrollToTop }
                                    hover="arrow"
                                >
                                    <Text fontSize={ 28 } className="arrow" pb={ 0 } mb={ 1 }>&uarr;</Text>
                                    <TextMd>Top</TextMd>
                                </ButtonHover>
                            </Box>
                            <Box mb={ 3 }>
                                { RichText.render(globalContent.footer_text) }
                            </Box>
                            <TextWrap linkStyle="none">
                                <List listStyle="inline">
                                    <li>
                                        <LinkHover href={ links.linkedIn } target="blank" hover="big">
                                            <SvgWrap width={ 25 }><LinkedInIcon /></SvgWrap>
                                        </LinkHover>
                                    </li>
                                    <li>
                                        <LinkHover href={ links.twitter } target="blank" hover="big">
                                            <SvgWrap width={ 25 }><TwitterIcon /></SvgWrap>
                                        </LinkHover>
                                    </li>
                                    <li>
                                        <LinkHover href={ links.github } target="blank" hover="big">
                                            <SvgWrap width={ 25 }><GithubIcon /></SvgWrap>
                                        </LinkHover>
                                    </li>
                                    <li>
                                        <LinkHover href={ links.email } target="blank" hover="big">
                                            <SvgWrap width={ 25 }><EmailIcon /></SvgWrap>
                                        </LinkHover>
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
