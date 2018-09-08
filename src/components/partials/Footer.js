import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as Scroll from 'react-scroll';
import { RichText } from 'prismic-reactjs';
import { LinkedInIcon, TwitterIcon, GithubIcon, EmailIcon, ThemeInverted } from '../ui';
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
            <ThemeInverted color svg>
                <footer className="footer width-100 pos-fix pin-bottom-left z-index-0">
                    <div className="footer__container container text-centre">
                        <div className="m-b-sm">
                            <button
                                onClick={ scroll.scrollToTop }
                                className="font-weight-bold font-uppercase hover hover--arrow"
                            >
                                <span className="block font-size-lg hover__text hover--arrow__arrow">&uarr;</span>
                                <span className="hover__text">Top</span>
                            </button>
                        </div>
                        <div className="m-b-md">
                            { RichText.render(globalContent.footer_text) }
                        </div>
                        <ul className="remove-link-styles remove-list-styles list-inline list-inline--xs">
                            <li>
                                <a href={ links.linkedIn } className="hover hover--big hover--header-social" target="blank">
                                    <LinkedInIcon />
                                </a>
                            </li>
                            <li>
                                <a href={ links.twitter } className="hover hover--big hover--header-social" target="blank">
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li>
                                <a href={ links.github } className="hover hover--big hover--header-social" target="blank">
                                    <GithubIcon />
                                </a>
                            </li>
                            <li>
                                <a href={ links.email } className="hover hover--big hover--header-social" target="blank">
                                    <EmailIcon />
                                </a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </ThemeInverted>
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
