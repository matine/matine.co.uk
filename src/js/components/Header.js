import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Nav from './Nav';
import store from '../store';
import logo from '../../img/logo.svg';

class Header extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const globalState = this.context.store.getState();
        const globalContent = globalState.content.global;

        return (
            <header className="header">
                <img src={ logo } className="header__logo" alt="logo" />
                <Nav />
                { RichText.render(globalContent.site_title) }
            </header>
        );
    }
}

Header.contextTypes = {
    store: PropTypes.object,
};

Header.propTypes = {
    globalContent: PropTypes.shape().isRequired,
};

export default Header;
