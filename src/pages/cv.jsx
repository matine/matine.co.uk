import React from 'react'
import { graphql } from 'gatsby'
import {
  Box,
  Container,
  Contained,
  ButtonHover,
  SvgWrap,
  TextSm,
} from '../components/ui'
import PageLayout from '../components/partials/PageLayout'
import LogoInfoLockup from '../components/partials/LogoInfoLockup'
import PrintIcon from '../components/ui/icons/PrintIcon'
import MyIntro from '../components/partials/MyIntro'
import MySkills from '../components/partials/MySkills'
import MyEmployment from '../components/partials/MyEmployment'
import MyEducation from '../components/partials/MyEducation'
import MyInterests from '../components/partials/MyInterests'

function CVPage({ data }) {
  const globalContent = data.global.edges[0].node.data

  const printPage = () => {
    window.print()
    return false
  }

  if (!globalContent) {
    return null
  }

  const {
    first_name,
    surname,
    me_intro_title,
    me_intro_text,
    me_skills_title,
    me_skills_text,
    me_employment_title,
    me_employments,
    me_education_title,
    me_educations,
    me_interests_title,
    me_interests_text,
  } = globalContent

  const pageName = 'cv'

  return (
    <PageLayout>
      <Box id={`${pageName}-page`} pb={5}>
        <Container>
          <Contained maxWidth={4} pb={5}>
            <Box pt={6} pb={4}>
              <LogoInfoLockup firstName={first_name} surname={surname} />
            </Box>
            <MyIntro
              meIntroTitle={me_intro_title}
              meIntroText={me_intro_text}
              sectionName={pageName}
            />
            <MySkills
              meSkillsTitle={me_skills_title}
              meSkillsText={me_skills_text}
              sectionName={pageName}
            />
            <MyEmployment
              meEmploymentTitle={me_employment_title}
              meEmployments={me_employments}
              sectionName={pageName}
            />
            <MyEducation
              meEducationTitle={me_education_title}
              meEducations={me_educations}
              sectionName={pageName}
            />
            <MyInterests
              meInterestsTitle={me_interests_title}
              meInterestsText={me_interests_text}
              sectionName={pageName}
            />
            <div>
              <ButtonHover
                hover="big"
                onClick={() => printPage()}
                className="hide-for-print"
              >
                <SvgWrap width={30}>
                  <PrintIcon />
                </SvgWrap>
                <Box className="show-on-hover" position="absolute" mt="50px">
                  <TextSm fontWeight="bold">Prints best in Chrome!</TextSm>
                </Box>
              </ButtonHover>
            </div>
          </Contained>
        </Container>
      </Box>
    </PageLayout>
  )
}

export default CVPage

export const pageQuery = graphql`
  query CvQuery {
    global: allPrismicGlobal {
      edges {
        node {
          uid
          data {
            first_name {
              text
            }
            surname {
              text
            }
            me_intro_title {
              text
            }
            me_intro_text {
              html
            }
            me_skills_title {
              text
            }
            me_skills_text {
              html
            }
            me_employment_title {
              text
            }
            me_education_title {
              text
            }
            me_employments {
              me_employment_date {
                text
              }
              me_employment_title {
                text
              }
              me_employment_description {
                html
              }
            }
            me_educations {
              me_education_date {
                text
              }
              me_education_title1 {
                text
              }
              me_education_description {
                html
              }
            }
            me_interests_title {
              text
            }
            me_interests_text {
              html
            }
          }
        }
      }
    }
  }
`
