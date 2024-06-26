import PropTypes from 'prop-types'
import React from 'react'
import { Box, HeadingDecorated, TextWrapSm, HeadingSm, HeadingMd } from '../ui'
import { PropTypeGatsbyText } from '../../propTypes'

function MyEducation({ meEducationTitle, meEducations, sectionName }) {
  if (!meEducationTitle && !meEducations) {
    return null
  }

  const renderEducations = meEducations.map((education, index) => {
    const educationDate = education.me_education_date
    const educationTitle = education.me_education_title1
    const educationDesc = education.me_education_description

    return (
      <Box key={index} className="cv-education-item" mb={4}>
        {educationDate && (
          <HeadingSm className="cv-education-date" color="light" mb={1}>
            {educationDate.text}
          </HeadingSm>
        )}
        {educationTitle && (
          <HeadingMd className="cv-education-title" mb={0}>
            {educationTitle.text}
          </HeadingMd>
        )}
        {educationDesc && (
          <TextWrapSm className="cv-education-desc" textSpacing mb={0}>
            <div
              dangerouslySetInnerHTML={{
                __html: educationDesc.html,
              }}
            />
          </TextWrapSm>
        )}
      </Box>
    )
  })

  return (
    <Box mb={5} className={`${sectionName}-section`}>
      {meEducationTitle && (
        <HeadingDecorated className={`${sectionName}-section__heading`}>
          {meEducationTitle.text}
        </HeadingDecorated>
      )}
      {renderEducations}
    </Box>
  )
}

MyEducation.defaultProps = {
  meEducationTitle: null,
  meEducations: null,
  sectionName: null,
}

MyEducation.propTypes = {
  meEducationTitle: PropTypeGatsbyText,
  meEducations: PropTypes.array,
  sectionName: PropTypes.string,
}

export default MyEducation
