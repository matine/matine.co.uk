import PropTypes from 'prop-types'
import React from 'react'
import { Box, HeadingDecorated, TextWrapSm, HeadingSm, HeadingMd } from '../ui'
import { PropTypeGatsbyText } from '../../propTypes'

function MyEmployment({ meEmploymentTitle, meEmployments, sectionName }) {
  if (!meEmploymentTitle && !meEmployments) {
    return null
  }

  const renderEmployments = meEmployments.map((employment, index) => {
    const employmentDate = employment.me_employment_date
    const employmentTitle = employment.me_employment_title
    const employmentDesc = employment.me_employment_description

    return (
      <Box className="cv-employment-item" key={index} mb={4}>
        {employmentDate && (
          <HeadingSm className="cv-employment-date" color="light" mb={1}>
            {employmentDate.text}
          </HeadingSm>
        )}
        {employmentTitle && (
          <HeadingMd
            className="cv-employment-title"
            mb={employmentDesc ? 2 : 0}
          >
            {employmentTitle.text}
          </HeadingMd>
        )}
        {employmentDesc && (
          <TextWrapSm className="cv-employment-desc" textSpacing mb={0}>
            <div
              dangerouslySetInnerHTML={{
                __html: employmentDesc.html,
              }}
            />
          </TextWrapSm>
        )}
      </Box>
    )
  })

  return (
    <Box mb={5} className={`${sectionName}-section`}>
      {meEmploymentTitle && (
        <HeadingDecorated className={`${sectionName}-section__heading`}>
          {meEmploymentTitle.text}
        </HeadingDecorated>
      )}
      {renderEmployments}
    </Box>
  )
}

MyEmployment.defaultProps = {
  meEmploymentTitle: null,
  meEmployments: null,
  sectionName: null,
}

MyEmployment.propTypes = {
  meEmploymentTitle: PropTypeGatsbyText,
  meEmployments: PropTypes.array,
  sectionName: PropTypes.string,
}

export default MyEmployment
