import React, { Component } from 'react';
import NavItem from './NavItem';

class Nav extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return (
            <nav>
                <ul>
                    <li><NavItem to="/about">About</NavItem></li>
                    <li><NavItem to="/work">Work</NavItem></li>
                    <li><NavItem to="/links">Links</NavItem></li>
                </ul>
            </nav>
        );
    }
}

export default Nav;
