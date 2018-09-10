import React, { Component } from 'react';
import { Flex, Box, TextXs, Span, Image, ThemeDefault } from '../ui';

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
            <Image
                src={ icon }
                alt={ weather }
                display={`${weatherIconLoaded ? 'block' : 'none'}`}
                onLoad={ () => this.handleIconLoad() }
                width="35px"

            />
        );

        return (
            <ThemeDefault themeDisplays>
                <div className="only-show-default">
                    <Flex flexDirection="row" alignItems="center" minHeight={ 37 }>
                            { imageIcon }
                        <Box ml={ 2 } flex={ 1 }>
                            <TextXs fontWeight="bold" fontStyle="italic">{ londonToday } { theWeather }</TextXs>
                        </Box>
                    </Flex>
                </div>
                <div className="only-show-inverted">
                    <TextXs fontWeight="bold">
                        <Span fontSize={ 26 }><span role="img" aria-label="Ghost">👻</span></Span>
                    </TextXs>
                </div>
            </ThemeDefault>
        );
    }
}

export default Weather;
