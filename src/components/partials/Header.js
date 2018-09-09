import React, { Component } from 'react';
import Weather from './Weather';
import { Nav, LinkedInIcon, GithubIcon, EmailIcon, ThemeDefault, Box, Grid, Col, TextWrap, List } from '../ui';
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
                                    <List linkStyle="inline">
                                        <li>
                                            <a href={ links.linkedIn } className="hover hover--big hover--header-social" target="blank">
                                                <LinkedInIcon size={ 25 } />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={ links.email } className="hover hover--big hover--header-social" target="blank">
                                                <EmailIcon size={ 25 } />
                                            </a>
                                        </li>
                                        <li>
                                            <a href={ links.github } className="hover hover--big hover--header-social" target="blank">
                                                <GithubIcon size={ 25 } />
                                            </a>
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
