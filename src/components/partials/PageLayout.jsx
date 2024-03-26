import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { useThemeSwitchContext } from '../../context/ThemeSwitchContext'
import { ThemeDefault, ThemeInverted, Box } from '../ui'
import globalStyles from '../ui/globalStyles'
import printStyles from '../ui/printStyles'
import SEO from './SEO'
import Header from './Header'
import Footer from './Footer'
import '@fontsource/raleway'

const GlobalStyle = createGlobalStyle`
  ${globalStyles}
  ${printStyles}
`

function PageLayout({ children, pageName }) {
  const { theme } = useThemeSwitchContext()

  return (
    <>
      <SEO />
      <GlobalStyle />
      <ThemeProvider theme={{ mode: theme }}>
        <ThemeInverted themeBg>
          <ThemeDefault themeColor themeSvg height="100%">
            <Header pageName={pageName} />
            <Box zIndex={1} position="relative" className="no-margin-for-print">
              <ThemeDefault themeBg themeBorder className="no-border-for-print">
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

PageLayout.propTypes = {
  pageName: PropTypes.string,
  children: PropTypes.shape({}),
}

export default PageLayout
