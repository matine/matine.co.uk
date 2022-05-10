import React, { useState, useEffect } from 'react'
import 'isomorphic-fetch'
import { Flex, Box, TextXs, Span, Image, ThemeDefault } from '../ui'

const Weather = () => {
  const [weatherIconLoaded, setWeatherIconLoaded] = useState(false)
  const [weatherResponse, setWeatherResponse] = useState(null)

  const fetchTheWeather = () => {
    const apiPath = '//api.wunderground.com/api/'
    const url = `${apiPath}${process.env.WEATHER_API_KEY}/geolookup/conditions/q/UK/London.json`

    console.log(url)

    /* eslint-disable-next-line no-undef */
    fetch(url, {
      headers: {
        'Content-Type': 'text/plain',
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log('Success!')
        setWeatherResponse(response)
      })
      .catch((err) => {
        setWeatherResponse(null)
        console.log('error: ', err)
      })
  }

  useEffect(() => {
    fetchTheWeather()
  }, [])

  if (!weatherResponse) {
    return null
  }

  const location = weatherResponse.location.city
  const { temp_c } = weatherResponse.current_observation
  const { weather } = weatherResponse.current_observation
  const weatherNoSpaces = weather.toLowerCase().replace(/\s/g, '')
  const icon = `//icons.wxug.com/i/c/i/${weatherNoSpaces}.gif`
  const londonToday = `${location} today is:`
  const theWeather = `${weather} and ${temp_c} °C`

  const imageIcon = (
    <Image
      src={icon}
      alt={weather}
      display={`${weatherIconLoaded ? 'block' : 'none'}`}
      onLoad={() => setWeatherIconLoaded(true)}
      width="35px"
    />
  )

  return (
    <ThemeDefault themeDisplays>
      <div className="only-show-default">
        <Flex flexDirection="row" alignItems="center" minHeight={37}>
          {imageIcon}
          <Box ml={2} flex={1}>
            <TextXs fontWeight="bold" fontStyle="italic">
              {londonToday} {theWeather}
            </TextXs>
          </Box>
        </Flex>
      </div>
      <div className="only-show-inverted">
        <TextXs fontWeight="bold">
          <Span fontSize={26}>
            <span role="img" aria-label="Ghost">
              👻
            </span>
          </Span>
        </TextXs>
      </div>
    </ThemeDefault>
  )
}

export default Weather
