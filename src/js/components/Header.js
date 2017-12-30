import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import Nav from './Nav';
import logo from '../../img/logo.svg';

class Header extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const {
            globalContent,
        } = this.props;

        return (
            <header className="header">
                <img
                    src={ logo }
                    className="header__logo"
                    alt="logo"
                />
                <Nav />
                { RichText.render(globalContent.site_title) }
            </header>
        );
    }
}

Header.propTypes = {
    globalContent: PropTypes.shape().isRequired,
};

export default Header;
