import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { connect } from 'react-redux';
import withLayout from '../components/hoc/withLayout';
import * as actions from '../state/actions';
import { Container, Grid, Box, ProjectThumbnail, ThemeDefault, Col, Text, SvgWrap, Fixed, Flex, Heading } from '../components/ui';
import SunIcon from '../components/ui/icons/SunIcon';

class IndexPage extends Component {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.hoverOnThumbnail = this.hoverOnThumbnail.bind(this);
        this.hoverOffThumbnail = this.hoverOffThumbnail.bind(this);
    }

    /**
     * Handle the hover on a thumbnail.
     */
    hoverOnThumbnail(index) {
        const {
            setTheme,
        } = this.props;

        setTheme('inverted');
    }

    /**
     * Handle the hover off a thumbnail.
     */
    hoverOffThumbnail() {
        const {
            setTheme,
        } = this.props;

        setTheme('default');
    }

    /**
     * Renders the project list items.
     *
     * @return {ReactNode}
     */
    renderProjectListItems() {
        const {
            data,
        } = this.props;

        const projectsContent = data.projects.edges;

        return projectsContent.map((project) => {
            const projectUid = project.node.uid;
            const projectData = project.node.data;
            const projectTitle = projectData.project_title.text;
            const projectThumbnail = projectData.project_thumbnail.localFile.childImageSharp.sizes;
            const projectThumbnail2 = projectData.project_thumbnail_2.localFile.childImageSharp.sizes;
            const linkToProjectUrl = `/${projectUid}`;

            return (
                <Col
                    key={ projectUid }
                    width={[ 1, 1, 1, 1/3 ]}
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
                                        sizes={ projectThumbnail }
                                    />
                                    <Box
                                        className="project-thumbnail__image2"
                                        position="absolute"
                                        top={ 0 }
                                        left={ 0 }
                                    >
                                        <Image
                                            sizes={ projectThumbnail2 }
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
            );
        });
    }

    /**
     * Renders the component.
     *
     * @return {ReactNode}
     */
    render() {
        const {
            data,
        } = this.props;

        const globalContent = data.global.edges[0].node.data;
        const globalFirstName = globalContent.first_name.text;
        const globalSurname = globalContent.surname.text;

        return (
            <div id="projects-page">
                <Container
                    pb={ 5 }
                    maxWidth={ 1500 }
                >
                    <Box
                        py={[5, 5, 6]}
                        mt={ 5 }
                    >
                        <Heading
                            caps
                            fontSize={[46, 46, 90]}
                            textAlign="center"
                            lineHeight={ .85 }
                            mb={[3, 3, 4]}
                        >
                            <Box
                                display="inline-block"
                                position="relative"
                            >
                                <Box
                                    display="inline-block"
                                    position="absolute"
                                    top={['-38px', '-38px', '-75px',]}
                                    left="39%"
                                >
                                    <SvgWrap
                                        color="primary"
                                        width={[46, 46, 90]}
                                    >
                                        <SunIcon />
                                    </SvgWrap>
                                </Box>
                                { globalFirstName } 
                            </Box>
                            <br/>
                            <span>
                                { globalSurname }
                            </span>
                        </Heading>
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
        projects: PropTypes.shape({
            edges: PropTypes.array.isRequired,
        }),
    }).isRequired,
};

export const mapStateToProps = state => ({
    theme: state.theme,
});

export const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(actions.setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(IndexPage));

export const pageQuery = graphql`
    query IndexQuery {
        projects: allPrismicProject(sort: { fields: [last_publication_date], order: DESC }) {
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
                                    sizes(
                                        maxWidth: 1200
                                        maxHeight: 1200
                                        quality: 90
                                        traceSVG: { color: "#021212" }
                                        cropFocus: ENTROPY
                                    ) {
                                        ...GatsbyImageSharpSizes_withWebp_tracedSVG
                                    }
                                }
                            }
                        }
                        project_thumbnail_2 {
                            localFile {
                                childImageSharp {
                                    sizes(
                                        maxWidth: 1200
                                        maxHeight: 1200
                                        quality: 90
                                        traceSVG: { color: "#021212" }
                                        cropFocus: ENTROPY
                                    ) {
                                        ...GatsbyImageSharpSizes_withWebp_tracedSVG
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
`;
