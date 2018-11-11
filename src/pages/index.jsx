import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { connect } from 'react-redux'
import withLayout from '../components/hoc/withLayout'
import LogoLockup from '../components/partials/LogoLockup'
import * as actions from '../state/actions'
import { Container, Grid, Box, ProjectThumbnail, ThemeDefault, Col, Text, Fixed, Flex, Heading } from '../components/ui'
import { PropTypeGatsbyProjectsData, PropTypeGatsbyGlobalData } from '../propTypes'

class IndexPage extends PureComponent {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor (props) {
        super(props)

        this.hoverOnThumbnail = this.hoverOnThumbnail.bind(this)
        this.hoverOffThumbnail = this.hoverOffThumbnail.bind(this)
    }

    /**
     * Handle the hover on a thumbnail.
     *
     * @param {number} index
     */
    hoverOnThumbnail (index) {
        const {
            setTheme,
        } = this.props

        setTheme('inverted')
    }

    /**
     * Handle the hover off a thumbnail.
     */
    hoverOffThumbnail () {
        const {
            setTheme,
        } = this.props

        setTheme('default')
    }

    /**
     * Renders the project list items.
     *
     * @return {ReactNode}
     */
    renderProjectListItems () {
        const {
            data,
        } = this.props

        const projectsContent = data.projects.edges

        return projectsContent.map(project => {
            const projectUid = project.node.uid
            const projectData = project.node.data
            const projectTitle = projectData.project_title.text
            const projectThumbnail = projectData.project_thumbnail.localFile.childImageSharp.fluid
            const projectThumbnail2 = projectData.project_thumbnail_2.localFile.childImageSharp.fluid
            const linkToProjectUrl = `/work/${ projectUid }`

            return (
                <Col
                    key={ projectUid }
                    width={[ 1, 1, 1, 1 / 3 ]}
                    onMouseEnter={ this.hoverOnThumbnail }
                    onMouseLeave={ this.hoverOffThumbnail }
                >
                    <ThemeDefault
                        themeProjectThumbnails
                    >
                        <ProjectThumbnail
                            className="project-thumbnail"
                        >
                            <Link
                                to={ linkToProjectUrl }
                            >
                                <Box
                                    className="project-thumbnail__images"
                                    position="relative"
                                    zIndex={ 1 }
                                >
                                    <Image
                                        fluid={ projectThumbnail }
                                    />
                                    <Box
                                        className="project-thumbnail__image2"
                                        position="absolute"
                                        top={ 0 }
                                        left={ 0 }
                                        width={ 1 }
                                    >
                                        <Image
                                            fluid={ projectThumbnail2 }
                                        />
                                    </Box>
                                </Box>
                                <Fixed
                                    className="project-thumbnail__hover"
                                    width={ 1 }
                                    height="100%"
                                >
                                    <Box
                                        width={ 1 }
                                        position="absolute"
                                        bottom={ 0 }
                                        left={ 0 }
                                    >
                                        <Box
                                            width="100%"
                                            pt="22.66%"
                                        >
                                            <Fixed
                                                px={ 2 }
                                            >
                                                <Flex
                                                    flex={ 1 }
                                                    alignItems="center"
                                                    justifyContent="center"
                                                    height="100%"
                                                >
                                                    <Heading
                                                        caps
                                                        fontSize={[16, 18, 22, 16, 20]}
                                                        mb={ 0 }
                                                        pb={ 0 }
                                                        fontWeight="bold"
                                                        textAlign="center"
                                                    >
                                                        { projectTitle }
                                                    </Heading>
                                                </Flex>
                                            </Fixed>
                                        </Box>
                                    </Box>
                                </Fixed>
                            </Link>
                        </ProjectThumbnail>
                    </ThemeDefault>
                </Col>
            )
        })
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

        const globalContent = data.global.edges[0].node.data

        if (!globalContent) {
            return null
        }

        const {
            first_name,
            surname,
        } = globalContent

        const pageName = 'projects'

        return (
            <div
                id={ `${ pageName }-page` }
            >
                <Container
                    pb={ 5 }
                    maxWidth={ 1500 }
                >
                    <Box
                        py={[5, 5, 6]}
                        mt={ 5 }
                    >
                        <LogoLockup
                            firstName={ first_name }
                            surname={ surname }
                        />
                        <Text
                            caps
                            fontWeight="bold"
                            textAlign="center"
                            fontSize={[16, 16, 26]}
                        >
                            Frontend developer
                        </Text>
                    </Box>
                    <Grid
                        gutter={ 1 }
                    >
                        { this.renderProjectListItems() }
                    </Grid>
                </Container>
            </div>
        )
    }
}

IndexPage.propTypes = {
    data: PropTypes.shape({
        PropTypeGatsbyProjectsData,
        PropTypeGatsbyGlobalData,
    }).isRequired,
}

export const mapStateToProps = state => ({
    theme: state.theme,
})

export const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(actions.setTheme(theme)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(IndexPage))

export const pageQuery = graphql`
    query IndexQuery {
        projects: allPrismicProject(sort: { fields: [data___project_order], order: DESC }) {
            edges {
                node {
                    uid
                    data {
                        project_title {
                            text
                        }
                        project_thumbnail {
                            localFile {
                                childImageSharp {
                                    fluid(
                                        maxWidth: 1200
                                        maxHeight: 1200
                                        quality: 90
                                        cropFocus: ENTROPY
                                    ) {
                                        ...GatsbyImageSharpFluid_withWebp
                                    }
                                }
                            }
                        }
                        project_thumbnail_2 {
                            localFile {
                                childImageSharp {
                                    fluid(
                                        maxWidth: 1200
                                        maxHeight: 1200
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
        },
        global: allPrismicGlobal(sort: { fields: [last_publication_date], order: DESC }) {
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
                    }
                }
            }
        }
    }
`
