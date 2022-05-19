import PropTypes from 'prop-types'
import React from 'react'
import {
  ThemeDefault,
  Container,
  Span,
  Box,
  Contained,
  PageHeading,
  TextWrapMd,
  TextWrap,
} from '../ui'
import {
  PropTypeGatsbyText,
  PropTypeGatsbyHtml,
  PropTypeGatsbyLink,
} from '../../propTypes'

const ProjectTextContent = ({
  projectTitle,
  projectMainText,
  projectRole,
  projectTechStack,
  projectVisitWebsiteLink,
  projectType,
}) => {
  const title = projectTitle && projectTitle.text
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
      <TextWrap textAlign="center" mb={[-33, -33, -37, -42]}>
        <ThemeDefault
          themeBg
          position="relative"
          top={[-33, -33, -37, -42]}
          display="inline-block"
        >
          <Contained maxWidth={1} mt={3} px={4}>
            <PageHeading py={1} mb={0} display="inline-block">
              {title}
            </PageHeading>
            <TextWrapMd textSpacing mt={-3} textAlign="left" linkStyle="default">
              <Box mt={4} mb={3}>
                <div
                  dangerouslySetInnerHTML={{
                    __html: mainText,
                  }}
                />
              </Box>
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
