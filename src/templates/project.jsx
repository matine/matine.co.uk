import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Helmet from 'react-helmet'
import { connect } from 'react-redux'
import config from '../../config/website'
import ProjectTextContent from '../components/partials/ProjectTextContent'
import ProjectImagesInsitu from '../components/partials/ProjectImagesInsitu'
import ProjectScreenshots from '../components/partials/ProjectScreenshots'
import ProjectPrevNext from '../components/partials/ProjectPrevNext'
import SEO from '../components/partials/SEO'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import withLayout from '../components/hoc/withLayout'
import * as actions from '../state/actions'
import { ThemeDefault, Box, BannerOverlay } from '../components/ui'
import { colors } from '../components/ui/theme'

class ProjectTemplate extends Component {
    /**
     * ProjectTemplate constructor.
     *
     * @param {Object} props
     */
    constructor (props) {
        super(props)

        props.setTheme('default')
    }

    /**
     * Renders the component.
     *
     * @return {ReactNode}
     */
    render () {
        const {
            data,
        } = this.props

        const projectNode = data.prismicProject
        const projectContent = projectNode.data
        const projectUid = projectNode.uid
        const allProjectsContent = data.projects.edges

        const {
            project_title,
            project_main_text,
            project_role,
            project_tech_stack,
            project_visit_website_link,
            project_type,
            project_banner,
            project_imac,
            project_ipad,
            project_iphone,
            project_screenshots,
        } = projectContent

        const projectBanner = project_banner.localFile && project_banner.localFile.childImageSharp.fluid
        const pageName = 'project'

        return (
            <ParallaxProvider>
                <Helmet title={ `${ project_title } | ${ config.siteTitle }` } />
                <SEO projectNode={ projectNode } projectPath={ projectUid } projectSEO />
                <div
                    id={ `${ pageName }-page` }
                >
                    <Parallax
                        offsetYMax={ 60 }
                        offsetYMin={ -100 }
                        slowerScrollRate
                    >
                        { project_banner && (
                            <Box
                                height={ [260, 260, 260, 300] }
                                mt={ [-60, -60, -60, 0] }
                            >
                                <Image
                                    fluid={ projectBanner }
                                    style={ { height: '100%' } }
                                />
                            </Box>
                        ) }
                    </Parallax>
                    <ThemeDefault
                        themeBg
                        position="relative"
                        zIndex={ 2 }
                        height="100%"
                    >
                        <BannerOverlay />
                        <ProjectTextContent
                            projectTitle={ project_title }
                            projectMainText={ project_main_text }
                            projectRole={ project_role }
                            projectTechStack={ project_tech_stack }
                            projectVisitWebsiteLink={ project_visit_website_link }
                            projectType={ project_type }
                        />
                        <Box
                            mt={ 500 }
                            bg={ [colors.transparent, colors.transparent, colors.transparent, colors.gray[3]] }
                        >
                            <ProjectImagesInsitu
                                projectImac={ project_imac }
                                projectIpad={ project_ipad }
                                projectIphone={ project_iphone }
                            />
                            <ProjectScreenshots
                                projectScreenshots={ project_screenshots }
                                projectUid={ projectUid }
                                projectType={ project_type }
                            />
                            <ProjectPrevNext
                                projectsContent={ allProjectsContent }
                                currentProjectUid={ projectUid }
                            />
                        </Box>
                    </ThemeDefault>
                </div>
            </ParallaxProvider>
        )
    }
};

ProjectTemplate.propTypes = {
    data: PropTypes.shape({
        prismicProject: PropTypes.shape().isRequired,
    }).isRequired,
}

export const mapStateToProps = state => ({
    theme: state.theme,
})

export const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(actions.setTheme(theme)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(ProjectTemplate))

export const pageQuery = graphql`
    query ProjectBySlug($uid: String!) {
        projects: allPrismicProject(sort: { fields: [data___project_order], order: DESC }) {
            edges {
                node {
                    uid
                    data {
                        project_title {
                            text
                        }
                    }
                }
            }
        }
        prismicProject(uid: { eq: $uid }) {
            uid
            first_publication_date
            last_publication_date
            data {
                project_title {
                    text
                }
                project_role {
                    text
                }
                project_tech_stack {
                    text
                }
                project_type
                project_visit_website_link {
                    url
                }
                project_main_text {
                    html
                }
                project_banner {
                    localFile {
                        childImageSharp {
                            fluid(
                                maxWidth: 1300
                                maxHeight: 300
                                quality: 90
                                cropFocus: ENTROPY
                            ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                project_imac {
                    localFile {
                        childImageSharp {
                            fluid(
                                maxWidth: 1600
                                maxHeight: 1266
                                quality: 90
                                cropFocus: ENTROPY
                            ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                project_ipad {
                    localFile {
                        childImageSharp {
                            fluid(
                                maxWidth: 600
                                maxHeight: 820
                                quality: 90
                                cropFocus: ENTROPY
                            ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                project_iphone {
                    localFile {
                        childImageSharp {
                            fluid(
                                maxWidth: 400
                                maxHeight: 800
                                quality: 90
                                cropFocus: ENTROPY
                            ) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
                project_screenshots {
                    screenshot {
                        localFile {
                            childImageSharp {
                                fluid(
                                    maxWidth: 1600
                                    quality: 90
                                    cropFocus: ENTROPY
                                ) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
