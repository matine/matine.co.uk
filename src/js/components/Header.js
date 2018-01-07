import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import Nav from './Nav';

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
            <header className="container text-centre">
                <Nav />
                { RichText.render(globalContent.site_title) }
            </header>
        );
    }
}

Header.propTypes = {
    globalContent: PropTypes.shape(),
};

Header.defaultProps = {
    globalContent: null,
};

const mapStateToProps = state => ({
    globalContent: state.content.global,
});

export default withRouter(connect(mapStateToProps)(Header));
