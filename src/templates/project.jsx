import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import { connect } from 'react-redux';
import Carousel from '../components/partials/Carousel';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import withLayout from '../components/hoc/withLayout';
import * as actions from '../state/actions';
import { ThemeDefault, Container, Span, Box, Contained, PageHeading, TextWrapMd, TextWrap, BannerOverlay, TouchDevices, ProjectsNav, Imac, Ipad, Iphone, CarouselWrap, BrowserWindow } from '../components/ui';

class ProjectTemplate extends Component {
    /**
     * Renders a project link.
     *
     * @return {XML}
     */
    renderProjectLink(project, linkText) {
        return (
            <Link to={ `/${project.uid}` }>
                { linkText }
            </Link>
        );
    }

    /**
     * Renders the carousel of project screenshots.
     *
     * @return {XML}
     */
    renderProjectScreenshotCarousel() {
        const {
            data,
        } = this.props;

        const projectUid = data.prismicProject.uid;
        const projectContent = data.prismicProject.data;
        const projectScreenshots = projectContent.project_screenshots;
        const projectType = projectContent.project_type;

        if (!projectScreenshots[0]) {
            return null;
        }

        const carouselItems = projectScreenshots.map((carouselItem, index) => {
            const carouselImage = carouselItem.screenshot.localFile.childImageSharp.sizes;
            const key = `${projectUid}-${index}`;

            return (
                <div key={ key }>
                    { projectType !== 'app' && (
                        <BrowserWindow>
                            <div
                                className="controls"
                            >
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </BrowserWindow>
                    ) }
                    <Image
                        sizes={ carouselImage }
                    />
                </div>
            );
        });

        return (
            <CarouselWrap>
                <Carousel
                    items={ carouselItems }
                    initialSlide={ 0 }
                />
            </CarouselWrap>
        );
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

        const projectContent = data.prismicProject.data;
        const projectType = projectContent.project_type;
        const projectImac = projectContent.project_imac.localFile.childImageSharp.sizes;
        const projectIpad = projectContent.project_ipad.localFile.childImageSharp.sizes;
        const projectIphone = projectContent.project_iphone.localFile.childImageSharp.sizes;
        const roleContent = projectContent.project_role && projectContent.project_role.text;
        const techStackContent = projectContent.project_tech_stack && projectContent.project_tech_stack.text;
        const visitWebsiteContent = projectContent.project_visit_website_link && projectContent.project_visit_website_link.url;
        const role = roleContent && (
            <p>
                <Span
                    fontWeight="bold"
                >   Role:&nbsp;
                </Span>
                { roleContent }
            </p>
        );
        const techStack = techStackContent && (
            <p>
                <Span
                    fontWeight="bold"
                >
                    Tech stack:&nbsp;
                </Span>
                { techStackContent }
            </p>
        );
        const visitWebsite = visitWebsiteContent && (
            <p>
                <a
                    href={ visitWebsiteContent }
                    target="_blank"
                >
                    { projectType === 'app' ? 'Download app' : 'Visit website' }
                </a>
            </p>
        );

        return (
            <ParallaxProvider>
                <div
                    id="project-page"
                >
                    <ThemeDefault
                        themeBg
                        position="relative"
                        zIndex={ 2 }
                        height="100%"
                    >
                        <BannerOverlay />
                        <Container>
                            <TextWrap
                                textAlign="center"
                            >
                                <ThemeDefault
                                    themeBg
                                    position="relative"
                                    top={[-33, -33, -37, -50]}
                                    display="inline-block"
                                >
                                    <PageHeading
                                        py={ 2 }
                                        px={ 3 }
                                        mb={ 0 }
                                        display="inline-block"
                                    >
                                        { projectContent.project_title.text }
                                    </PageHeading>
                                </ThemeDefault>
                                <Contained
                                    maxWidth={ 0 }
                                    mt={ 3 }
                                >
                                    <TextWrapMd
                                        textSpacing
                                        mt={[-33, -33, -37, -50]}
                                        linkStyle="default"
                                    >
                                        <Box
                                            mt={ 4 }
                                            mb={ 3 }
                                        >
                                            <div
                                                dangerouslySetInnerHTML={
                                                    {
                                                        __html: projectContent.project_main_text.html,
                                                    }
                                                }
                                            />
                                        </Box>
                                        { role }
                                        { techStack }
                                        { visitWebsite }
                                    </TextWrapMd>
                                </Contained>
                            </TextWrap>
                        </Container>
                        <Box
                            mt={ 500 }
                            bg={['transparent', 'transparent', 'transparent', 'transparent', 'gray.3']}
                        >
                            <Box
                                position="relative"
                                top={ -500 }
                                mb={ -500 }
                            >
                                <Container>
                                    <Imac>
                                        <Image
                                            sizes={ projectImac }
                                        />
                                    </Imac>
                                    <TouchDevices>
                                        <Ipad>
                                            <Image
                                                sizes={ projectIpad }
                                            />
                                        </Ipad>
                                        <Iphone>
                                            <Image
                                                sizes={ projectIphone }
                                            />
                                        </Iphone>
                                    </TouchDevices>
                                </Container>
                            </Box>
                            <Box
                                position="relative"
                                zIndex={ 1 }
                                mt={ 5 }
                                pb={ 6 }
                            >
                                <Container>
                                    { this.renderProjectScreenshotCarousel() }
                                </Container>
                            </Box>
                            <TextWrap fontSize={[26, 26, 40]}>
                                <ProjectsNav direction="prev">Prev</ProjectsNav>
                                <ProjectsNav direction="next">Next</ProjectsNav>
                            </TextWrap>
                        </Box>
                    </ThemeDefault>
                </div>
            </ParallaxProvider>
        );
    }
};

ProjectTemplate.propTypes = {
    data: PropTypes.shape({
        prismicProject: PropTypes.shape().isRequired,
    }).isRequired,
};

export const mapStateToProps = state => ({
    theme: state.theme,
});

export const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(actions.setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(ProjectTemplate));

export const pageQuery = graphql`
    query ProjectBySlug($uid: String!) {
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
                project_imac {
                    localFile {
                        childImageSharp {
                            sizes(
                                maxWidth: 1600
                                maxHeight: 1266
                                quality: 90
                                traceSVG: { color: "#021212" }
                                cropFocus: ENTROPY
                            ) {
                                ...GatsbyImageSharpSizes_withWebp_tracedSVG
                            }
                        }
                    }
                }
                project_ipad {
                    localFile {
                        childImageSharp {
                            sizes(
                                maxWidth: 600
                                maxHeight: 820
                                quality: 90
                                traceSVG: { color: "#021212" }
                                cropFocus: ENTROPY
                            ) {
                                ...GatsbyImageSharpSizes_withWebp_tracedSVG
                            }
                        }
                    }
                }
                project_iphone {
                    localFile {
                        childImageSharp {
                            sizes(
                                maxWidth: 400
                                maxHeight: 800
                                quality: 90
                                traceSVG: { color: "#021212" }
                                cropFocus: ENTROPY
                            ) {
                                ...GatsbyImageSharpSizes_withWebp_tracedSVG
                            }
                        }
                    }
                }
                project_screenshots {
                    screenshot {
                        localFile {
                            childImageSharp {
                                sizes(
                                    maxWidth: 400
                                    maxHeight: 800
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
    }
`;
