import React from 'react';
import NavItem from './NavItem';
import { NavWrap, List, TextWrapSm } from '../ui';

const Nav = () => (
    <NavWrap>
        <TextWrapSm fontWeight="bold" caps linkStyle="none" pt={ 1 }>
            <List listStyle="inline" inlineGutter={ 2 }>
                <li><NavItem to="/about">About</NavItem></li>
                <li><NavItem to="/work">Work</NavItem></li>
                <li><NavItem to="/links">Links</NavItem></li>
            </List>
        </TextWrapSm>
    </NavWrap>
);

export default Nav;