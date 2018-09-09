import React, { Component } from 'react';
import Weather from './Weather';
import { Nav, LinkedInIcon, GithubIcon, EmailIcon, ThemeDefault, Box, Grid, Col, TextWrap, List, LinkHover } from '../ui';
import links from '../../constants/links';

class Header extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return (
            <Box position="fixed" width={ 1 } top={ 0 } left={ 0 } zIndex={ 99 }>
                <ThemeDefault bg border>
                    <Box py={ 3 } px={ 3 }>
                        <Grid gutterY={ 0 }>
                            <Col width={[ 1, 1, 1/3 ]} display={[ 'none', 'none', 'none', 'block']}>
                                <Weather />
                            </Col>
                            <Col width={[ 1, 1, 1, 1/3 ]}>
                                <TextWrap textAlign="center">
                                    <Nav />
                                </TextWrap>
                            </Col>
                            <Col width={[ 1, 1, 1/3 ]} display={[ 'none', 'none', 'none', 'block']}>
                                <TextWrap linkStyle="none" textAlign="right">
                                    <List listStyle="inline">
                                        <li>
                                            <LinkHover href={ links.linkedIn } target="blank" hover="big">
                                                <LinkedInIcon size={ 25 } />
                                            </LinkHover>
                                        </li>
                                        <li>
                                            <LinkHover href={ links.email } target="blank" hover="big">
                                                <EmailIcon size={ 25 } />
                                            </LinkHover>
                                        </li>
                                        <li>
                                            <LinkHover href={ links.github } target="blank" hover="big">
                                                <GithubIcon size={ 25 } />
                                            </LinkHover>
                                        </li>
                                    </List>
                                </TextWrap>
                            </Col>
                        </Grid>
                    </Box>
                </ThemeDefault>
            </Box>
        );
    }
}

export default Header;
