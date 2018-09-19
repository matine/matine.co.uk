import React from 'react';
import Weather from './Weather';
import Nav from './Nav';
import { LinkedInIcon, GithubIcon, EmailIcon, ThemeDefault, Box, Grid, Col, TextWrap, List, LinkHover, SvgWrap } from '../ui';
import links from '../../constants/links';

const Header = ({
    globalContent,
}) => (
    <Box className="hide-for-print" position="fixed" width={ 1 } top={ 0 } left={ 0 } zIndex={ 99 }>
        <ThemeDefault themeBg themeBorder themeSvg py="12px" px={ 3 } minHeight={ 77 }>
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
                    <TextWrap linkStyle="none" textAlign="right" pt={ 1 }>
                        <List listStyle="inline">
                            <li>
                                <LinkHover href={ links.linkedIn } target="blank" hover="big">
                                    <SvgWrap width={ 25 }><LinkedInIcon /></SvgWrap>
                                </LinkHover>
                            </li>
                            <li>
                                <LinkHover href={ links.email } target="blank" hover="big">
                                    <SvgWrap width={ 25 }><EmailIcon /></SvgWrap>
                                </LinkHover>
                            </li>
                            <li>
                                <LinkHover href={ links.github } target="blank" hover="big">
                                    <SvgWrap width={ 25 }><GithubIcon /></SvgWrap>
                                </LinkHover>
                            </li>
                        </List>
                    </TextWrap>
                </Col>
            </Grid>
        </ThemeDefault>
    </Box>
);

export default Header;
