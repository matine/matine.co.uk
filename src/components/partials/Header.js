import React, { Component } from 'react';
import Nav from '../ui/Nav';
import Weather from './Weather';
import { LinkedInIcon, GithubIcon, EmailIcon, ThemeDefault } from '../ui';
import links from '../../constants/links';

class Header extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return (
            <header className="pos-fix width-100 pin-top-left z-index-99">
                <ThemeDefault bg border>
                    <div className="p-h-md">
                        <div className="grid grid--v-gutter-none">
                            <div className="grid__col grid__col-md-4 hidden block-md">
                                <Weather />
                            </div>
                            <div className="grid__col grid__col-md-4 text-centre">
                                <Nav />
                            </div>
                            <div className="grid__col grid__col-md-4 hidden block-md">
                                <ul className="remove-link-styles remove-list-styles list-inline list-inline--xs float-right">
                                    <li>
                                        <a href={ links.linkedIn } className="hover hover--big hover--header-social" target="blank">
                                            <LinkedInIcon size={ 25 } />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ links.email } className="hover hover--big hover--header-social" target="blank">
                                            <EmailIcon size={ 25 } />
                                        </a>
                                    </li>
                                    <li>
                                        <a href={ links.github } className="hover hover--big hover--header-social" target="blank">
                                            <GithubIcon size={ 25 } />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </ThemeDefault>
            </header>
        );
    }
}

export default Header;
