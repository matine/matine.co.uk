import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LinkedInIcon, TwitterIcon, GithubIcon, EmailIcon, PinterestIcon } from '../ui';

class Footer extends Component {
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
            <footer className="width-100 pos-fix pin-bottom-left z-index-0">
                <div className="container text-centre p-v-lg">
                    <ul className="remove-link-styles remove-list-styles list-inline list-inline--xs">
                        <li><a href="#" className="icon-colour-primary"><LinkedInIcon /></a></li>
                        <li><a href="#" className="icon-colour-primary"><TwitterIcon /></a></li>
                        <li><a href="#" className="icon-colour-primary"><GithubIcon /></a></li>
                        <li><a href="#" className="icon-colour-primary"><EmailIcon /></a></li>
                        <li><a href="#" className="icon-colour-primary"><PinterestIcon /></a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    globalContent: PropTypes.shape(),
};

Footer.defaultProps = {
    globalContent: null,
};

const mapStateToProps = state => ({
    globalContent: state.content.global,
});

export default connect(mapStateToProps)(Footer);
