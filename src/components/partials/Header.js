import React, { Component } from 'react';
import Nav from '../ui/Nav';
import { LinkedInIcon, TwitterIcon, GithubIcon, EmailIcon, PinterestIcon } from '../ui';
import links from '../../constants/links';

class Header extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return (
            <header className="bg-texture b-a-frame b-b-none pos-fix width-100 pin-top-left z-index-99 p-v-md">
                <div className="p-h-md">
                    <div className="grid grid--v-gutter-none">
                        <div className="grid__col grid__col-md-4 hidden block-md">
                            <p>This will be the weather</p>
                        </div>
                        <div className="grid__col grid__col-md-4 text-centre">
                            <Nav />
                        </div>
                        <div className="grid__col grid__col-md-4 hidden block-md">
                            <ul className="remove-link-styles remove-list-styles list-inline list-inline--xs float-right">
                                <li><a href={ links.linkedIn } className="icon-colour-base" target="blank"><LinkedInIcon size="25" /></a></li>
                                <li><a href={ links.email } className="icon-colour-base" target="blank"><EmailIcon size="25" /></a></li>
                                <li><a href={ links.github } className="icon-colour-base" target="blank"><GithubIcon size="25" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
