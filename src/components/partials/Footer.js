import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Scroll from 'react-scroll';
import { RichText } from 'prismic-reactjs';
import { LinkedInIcon, TwitterIcon, GithubIcon, EmailIcon } from '../ui';
import links from '../../constants/links';

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

        const scroll = Scroll.animateScroll;

        return (
            <footer className="footer width-100 pos-fix pin-bottom-left z-index-0">
                <div className="footer__container container text-centre">
                    <div className="m-b-sm">
                        <button
                            onClick={ scroll.scrollToTop }
                            className="colour-primary font-weight-bold font-uppercase"
                        >
                            <span className="block font-size-lg">&uarr;</span>
                            <span>Top</span>
                        </button>
                    </div>
                    <div className="colour-primary m-b-md">
                        { RichText.render(globalContent.footer_text) }
                    </div>
                    <ul className="remove-link-styles remove-list-styles list-inline list-inline--xs">
                        <li>
                            <a href={ links.linkedIn } className="icon-colour-primary" target="blank">
                                <LinkedInIcon />
                            </a>
                        </li>
                        <li>
                            <a href={ links.twitter } className="icon-colour-primary" target="blank">
                                <TwitterIcon />
                            </a>
                        </li>
                        <li>
                            <a href={ links.github } className="icon-colour-primary" target="blank">
                                <GithubIcon />
                            </a>
                        </li>
                        <li>
                            <a href={ links.email } className="icon-colour-primary" target="blank">
                                <EmailIcon />
                            </a>
                        </li>
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
