import PropTypes from 'prop-types'
import React from 'react'
import {
  ThemeDefault,
  Container,
  Span,
  Box,
  Contained,
  TextWrapMd,
  TextWrap,
} from '../ui'
import {
  PropTypeGatsbyText,
  PropTypeGatsbyHtml,
  PropTypeGatsbyLink,
} from '../../propTypes'

function ProjectTextContent({
  projectMainText,
  projectRole,
  projectTechStack,
  projectVisitWebsiteLink,
  projectType,
}) {
  const mainText = projectMainText && projectMainText.html
  const roleContent = projectRole && projectRole.text
  const techStackContent = projectTechStack && projectTechStack.text
  const visitWebsiteContent =
    projectVisitWebsiteLink && projectVisitWebsiteLink.url

  const role = roleContent && (
    <p>
      <Span fontWeight="bold"> Role:&nbsp;</Span>
      {roleContent}
    </p>
  )
  const techStack = techStackContent && (
    <p>
      <Span fontWeight="bold">Tech stack:&nbsp;</Span>
      {techStackContent}
    </p>
  )
  const visitWebsite = visitWebsiteContent && (
    <p>
      <a href={visitWebsiteContent} target="_blank" rel="noopener noreferrer">
        {projectType === 'app' ? 'Download app' : 'Visit website'}
      </a>
    </p>
  )

  return (
    <Container>
      <TextWrap textAlign="center" mb={100}>
        <ThemeDefault position="relative" mt={80} display="inline-block">
          <Contained maxWidth={5} mt={3} px={4}>
            <TextWrapMd
              textSpacing
              mt={-3}
              textAlign="left"
              linkStyle="default"
            >
              <Box mt={4} mb={3}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: mainText,
                  }}
                />
              </Box>
            </TextWrapMd>
            <TextWrapMd textAlign="left" linkStyle="default" textSpacing>
              {role}
              {techStack}
              {visitWebsite}
            </TextWrapMd>
          </Contained>
        </ThemeDefault>
      </TextWrap>
    </Container>
  )
}

ProjectTextContent.defaultProps = {
  projectTitle: null,
  projectMainText: null,
  projectRole: null,
  projectTechStack: null,
  projectVisitWebsiteLink: null,
  projectType: null,
}

ProjectTextContent.propTypes = {
  projectTitle: PropTypeGatsbyText,
  projectMainText: PropTypeGatsbyHtml,
  projectRole: PropTypeGatsbyText,
  projectTechStack: PropTypeGatsbyText,
  projectVisitWebsiteLink: PropTypeGatsbyLink,
  projectType: PropTypes.string,
}

export default ProjectTextContent
