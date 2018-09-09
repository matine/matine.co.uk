import React, { Component } from 'react';
import Nav from '../ui/Nav';
import Weather from './Weather';
import { LinkedInIcon, GithubIcon, EmailIcon, ThemeDefault, Box, Grid, Col, TextWrap } from '../ui';
import links from '../../constants/links';

class Header extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return (
            <header className="pos-fix width-100 pin-top-left z-index-99">
                <ThemeDefault bg border>
                    <Box py={ 3 } px={ 3 }>
                        <Grid gutterY={ 0 }>
                            <Col width={[ 1, 1, 1/3 ]} className="hidden block-md">
                                <Weather />
                            </Col>
                            <Col width={[ 1, 1, 1/3 ]}>
                                <TextWrap textAlign="center">
                                    <Nav />
                                </TextWrap>
                            </Col>
                            <Col width={[ 1, 1, 1/3 ]} className="hidden block-md">
                                <ul className="remove-link-styles remove-list-styles list-inline list-inline--xs float-right">
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
                                </ul>
                            </Col>
                        </Grid>
                    </Box>
                </ThemeDefault>
            </header>
        );
    }
}

export default Header;
