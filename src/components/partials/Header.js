import React, { Component } from 'react';
import Nav from '../ui/Nav';

class Header extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return (
            <header className="bg-texture b-a-frame b-b-none pos-fix width-100 pin-top-left z-index-99 p-v-md">
                <div className="container text-centre">
                    <Nav />
                </div>
            </header>
        );
    }
}

export default Header;
