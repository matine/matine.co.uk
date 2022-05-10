import React from 'react'
import { ThemeProvider } from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import { useThemeSwitchContext } from '../../context/ThemeSwitchContext'
import { ThemeDefault, ThemeInverted, Box } from '../ui'
import globalStyles from '../ui/globalStyles'
import printStyles from '../ui/printStyles'
import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'
import '@fontsource/noto-sans'

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
  ${printStyles}
`

const PageLayout = ({children}) => {
  const {
    theme,
  } = useThemeSwitchContext()

  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={{ mode: theme }}>
        <ThemeInverted themeBg>
          <ThemeDefault themeColor themeSvg height="100%">
            <Header />
            <Box
              zIndex={1}
              position="relative"
              pt={[25, 25, 25, 40]}
              className="no-margin-for-print"
            >
              <ThemeDefault
                themeBg
                themeBorder
                className="no-border-for-print"
              >
                {children}
              </ThemeDefault>
            </Box>
            <Footer />
          </ThemeDefault>
        </ThemeInverted>
      </ThemeProvider>
    </>
  )
}

export default PageLayout
