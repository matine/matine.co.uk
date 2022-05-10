import React, { useContext, createContext } from 'react'

const ThemeSwitchContext = createContext({})

export const useThemeSwitchContext = () => useContext(ThemeSwitchContext)

export default ThemeSwitchContext
