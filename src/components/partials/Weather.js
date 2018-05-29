import React, { Component } from 'react';

class Weather extends Component {
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
            weatherIconLoaded: false,
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
     * Handles when the icon image loads.
     *
     * @return {void}
     */
    handleIconLoad() {
        this.setState({
            weatherIconLoaded: true,
        });
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const {
            weatherResponse,
            weatherIconLoaded,
        } = this.state;

        if (!weatherResponse) {
            return null;
        }

        const location = weatherResponse['location']['city'];
        const temp_c = weatherResponse['current_observation']['temp_c'];
        const weather = weatherResponse['current_observation']['weather'];
        let weatherNoSpaces = weather.toLowerCase().replace(/\s/g, '');
        const icon = `http://icons.wxug.com/i/c/i/${weatherNoSpaces}.gif`; 
        const londonToday = `${location} today is:`;
        const theWeather = `${weather} and ${temp_c} °C`;

        const imageIcon = (
            <img
                src={ icon }
                className="weather__icon"
                onLoad={ () => this.handleIconLoad() }
            />
        );

        return (
            <div>
                <div className="weather">
                    { weatherIconLoaded && imageIcon }
                    <p className="weather__text font-size-xs font-weight-bold">{ londonToday } { theWeather }</p>
                </div>
                <div className="weather--inverted">
                    <p className="weather--inverted__text font-size-sm font-weight-bold">
                        <span className="font-size-lg">👻</span>
                    </p>
                </div>
            </div>
        );
    }
}

export default Weather;
