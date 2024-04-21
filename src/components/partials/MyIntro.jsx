import PropTypes from 'prop-types'
import React from 'react'
import { Box, HeadingDecorated, TextWrapMd } from '../ui'
import { PropTypeGatsbyText, PropTypeGatsbyHtml } from '../../propTypes'

function MyIntro({ isCentered, meIntroTitle, meIntroText, sectionName }) {
  if (!meIntroTitle && !meIntroText) {
    return null
  }

  return (
    <Box mb={5} className={`${sectionName}-section`}>
      {meIntroTitle && (
        <HeadingDecorated
          isCentered={isCentered}
          className={`${sectionName}-section__heading`}
        >
          {meIntroTitle.text}
        </HeadingDecorated>
      )}
      {meIntroText && (
        <TextWrapMd textSpacing>
          <div
            dangerouslySetInnerHTML={{
              __html: meIntroText.html,
            }}
          />
        </TextWrapMd>
      )}
    </Box>
  )
}

MyIntro.defaultProps = {
  isCentered: false,
  meIntroTitle: null,
  meIntroText: null,
  sectionName: null,
}

MyIntro.propTypes = {
  isCentered: PropTypes.bool,
  meIntroTitle: PropTypeGatsbyText,
  meIntroText: PropTypeGatsbyHtml,
  sectionName: PropTypes.string,
}

export default MyIntro
