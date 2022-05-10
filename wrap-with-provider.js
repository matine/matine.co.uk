import React from 'react'
import ThemeSwitchProvider from './src/components/providers/ThemeSwitchProvider'

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => <ThemeSwitchProvider>{ element }</ThemeSwitchProvider>
