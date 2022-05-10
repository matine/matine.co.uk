import React, { useState } from 'react'
import ThemeSwitchContext from '../../context/ThemeSwitchContext'

const ThemeSwitchProvider = ({
  children,
}) => {
  const [theme, setTheme] = useState('default')

  return (
    <ThemeSwitchContext.Provider
      value={{
        setTheme,
        theme,
      }}
    >
      { children }
    </ThemeSwitchContext.Provider>
  );
};

export default ThemeSwitchProvider
