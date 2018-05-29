import React, { Component } from 'react';
import Nav from '../ui/Nav';
import { LinkedInIcon, TwitterIcon, GithubIcon, EmailIcon, PinterestIcon } from '../ui';
import links from '../../constants/links';

class Header extends Component {
    /**
     * Component constructor.
     *
     * @param {Object} props
     * @return {void}
     */
    constructor(props) {
        super(props);

        this.state = {
            weatherResponse: null,
        };

        this.fetchTheWeather();
    }

    /**
     * Fetches the weather for London.
     *
     * @return {void}
     */
    fetchTheWeather() {
        const url = 'http://api.wunderground.com/api/d1d7592b6fb76038/geolookup/conditions/q/UK/London.json';

        fetch(url, {
                headers: {
                    "Content-Type": "multipart/form-data; charset=utf-8"
                }
            })
            .then(res => res.json())
            .then(response => {
                this.setState({
                    weatherResponse: response,
                });
            })
            .catch(err => {
                this.setState({
                    weatherResponse: null,
                });
            });
    }

    /**
     * Renders the weather for London.
     *
     * @return {XML}
     */
    renderWeather() {
        const {
            weatherResponse,
        } = this.state;

        if (!weatherResponse) {
            return null;
        }

        const location = weatherResponse['location']['city'];
        const temp_c = weatherResponse['current_observation']['temp_c'];
        const weather = weatherResponse['current_observation']['weather'];
        let weatherNoSpaces = weather.toLowerCase().replace(/\s/g, '');
        if (weatherNoSpaces === 'scatteredclouds') {
            weatherNoSpaces = 'partlycloudy';
        }
        const icon = `http://icons.wxug.com/i/c/i/${weatherNoSpaces}.gif`; 
        const londonToday = `${location} today is:`;
        const theWeather = `${weather} and ${temp_c} °C`;

        return (
            <div>
                <div className="weather">
                    <img src={ icon } className="weather__icon" />
                    <p className="weather__text font-size-xs font-weight-bold">{ londonToday } { theWeather }</p>
                </div>
                <div className="weather--inverted">
                    <p className="weather--inverted__text font-size-sm font-weight-bold"><span className="font-size-lg">👻</span></p>
                </div>
            </div>
        );
    }

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
                            { this.renderWeather() }
                        </div>
                        <div className="grid__col grid__col-md-4 text-centre">
                            <Nav />
                        </div>
                        <div className="grid__col grid__col-md-4 hidden block-md">
                            <ul className="remove-link-styles remove-list-styles list-inline list-inline--xs float-right">
                                <li>
                                    <a href={ links.linkedIn } className="icon-colour-base" target="blank">
                                        <LinkedInIcon size="25" />
                                    </a>
                                </li>
                                <li>
                                    <a href={ links.email } className="icon-colour-base" target="blank">
                                        <EmailIcon size="25" />
                                    </a>
                                </li>
                                <li>
                                    <a href={ links.github } className="icon-colour-base" target="blank">
                                        <GithubIcon size="25" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
