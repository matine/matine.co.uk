import PropTypes from 'prop-types'
import React from 'react'
import { Box, HeadingDecorated, TextWrapSm } from '../ui'
import { PropTypeGatsbyText, PropTypeGatsbyHtml } from '../../propTypes'

function MySkills({ meSkillsTitle, meSkillsText, sectionName, isCentered }) {
  if (!meSkillsTitle && !meSkillsText) {
    return null
  }

  return (
    <Box mb={5} className={`${sectionName}-section`}>
      {meSkillsTitle && (
        <HeadingDecorated
          isCentered={isCentered}
          className={`${sectionName}-section__heading`}
        >
          {meSkillsTitle.text}
        </HeadingDecorated>
      )}
      {meSkillsText && (
        <TextWrapSm
          className="cv-skills-text"
          listStyle="none"
          textSpacing
          headings
        >
          <div
            dangerouslySetInnerHTML={{
              __html: meSkillsText.html,
            }}
          />
        </TextWrapSm>
      )}
    </Box>
  )
}

MySkills.defaultProps = {
  meSkillsTitle: null,
  meSkillsText: null,
  sectionName: null,
  isCentered: null,
}

MySkills.propTypes = {
  meSkillsTitle: PropTypeGatsbyText,
  meSkillsText: PropTypeGatsbyHtml,
  sectionName: PropTypes.string,
  isCentered: PropTypes.bool,
}

export default MySkills
