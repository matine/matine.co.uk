import React from 'react'
import NavItem from './NavItem'
import { NavWrap, List, TextWrapSm } from '../ui'

function Nav () {
    return (
        <NavWrap>
            <TextWrapSm fontWeight="bold" caps linkStyle="none" pt={ 2 }>
                <List listStyle="inline" inlineGutter={ 2 }>
                    <li><NavItem to="/about">About</NavItem></li>
                    <li><NavItem to="/">Work</NavItem></li>
                    <li><NavItem to="/links">Links</NavItem></li>
                </List>
            </TextWrapSm>
        </NavWrap>
    )
};

export default Nav
