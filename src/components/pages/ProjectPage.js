import React from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import Carousel from '../partials/Carousel';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import { ThemeDefault, Container, Banner, Image, Iphone, Ipad, Imac, Span, Box, Contained, PageHeading, TextWrapMd, TouchDevices, ProjectsNav, TextWrap, BrowserWindow, CarouselWrap } from '../ui';

class ProjectPage extends Page {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            projectUid: this.props.match.params.uid,
            projectContent: null,
            numImagesLoaded: 0,
            minNumOfImages: 0,
        }

        props.setTheme('default');
    }

    /**
     * Things to do when the component recieves props.
     *
     * @return {void}
     */
    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        if (props.match.params.uid !== this.state.projectUid) {
            this.onPageChange(props.match.params.uid);
        }
    }

    /**
     * Things to do when the page changes.
     *
     * @param {String} newPageUid
     * @return {void}
     */
    onPageChange(newPageUid) {
        this.setState({
            projectUid: newPageUid,
            numImagesLoaded: 0,
            minNumOfImages: 0,
        }, () => this.getProjectContent());
    }

    /**
     * Things to do before the component renders.
     *
     * @return {void}
     */
    componentWillMount() {
        const {
            setTheme,
        } = this.props;

        setTheme('default');

        this.getProjectContent();
    }

    /**
     * Count minimum amount of images to load the page.
     *
     * @return {void}
     */
    countMinNumOfImages() {
        const projectContent = this.state.projectContent.data;
        let minNumOfImages = 0;

        projectContent.project_imac.url && (minNumOfImages += 1);
        projectContent.project_ipad.url && (minNumOfImages += 1);
        projectContent.project_iphone.url && (minNumOfImages += 1);

        this.setState({ minNumOfImages });
    }

    /**
     * Handles when an images are all loaded.
     *
     * @return {void}
     */
    handleImageLoaded() {
        const {
            setImgsLoading,
        } = this.props;

        const {
            minNumOfImages,
        } = this.state;

        this.setState({ numImagesLoaded: this.state.numImagesLoaded += 1 });

        if (this.state.numImagesLoaded >= minNumOfImages) {
            setImgsLoading(false);
        }
    }

    /**
     * Gets the current project content from the array of projects and saves to state.
     *
     * @return {void}
     */
    getProjectContent() {
        const projectsContent = this.props.content.projects;

        projectsContent
            .filter(project => project.uid === this.state.projectUid)
            .map((project, index) => {
                this.setState({
                    projectContent: project,
                }, () => this.countMinNumOfImages());

                return true;
            });
    }

    /**
     * Gets the prev project id and title.
     *
     * @return {Object|null}
     */
    getPrevProject() {
        const projectsContent = this.props.content.projects;
        const currentProjectPos = projectsContent.map(project => project.uid).indexOf(this.props.match.params.uid);

        if (currentProjectPos > 0) {
            const prevProject = projectsContent[currentProjectPos-1];

            if (!prevProject) {
                return null;
            }

            return {
                uid: prevProject.uid,
                title: prevProject.data.project_title[0].text,
            };
        } else {
            return null;
        }
    }

    /**
     * Gets the next project id and title.
     *
     * @return {Object|null}
     */
    getNextProject() {
        const projectsContent = this.props.content.projects;
        const numberOfProjects = projectsContent.length;
        const currentProjectPos = projectsContent.map(project => project.uid).indexOf(this.props.match.params.uid);

        if (currentProjectPos < numberOfProjects) {
            const nextProject = projectsContent[currentProjectPos+1];

            if (!nextProject) {
                return null;
            }

            return {
                uid: nextProject.uid,
                title: nextProject.data.project_title[0].text,
            };
        } else {
            return null;
        }
    }

    /**
     * Renders the carousel of project screenshots.
     *
     * @return {XML}
     */
    renderProjectScreenshotCarousel() {
        const projectContent = this.state.projectContent.data;
        const projectScreenshots = projectContent.project_screenshots;

        if (!projectScreenshots[0]) {
            return null;
        }

        const carouselItems = projectScreenshots.map(carouselItem => {
            const carouselImage = carouselItem.screenshot;

            return (
                <div key={ carouselImage.alt }>
                    <BrowserWindow>
                        <div className="controls"><span></span><span></span><span></span></div>
                    </BrowserWindow>
                    <Image
                        width={ 1 }
                        src={ carouselImage.url }
                        alt={ carouselImage.alt }
                        onLoad={ this.handleImageLoaded.bind(this) }
                    />
                </div>
            );
        });

        if (this.props.ui.imgsLoading) {
            return null;
        }

        return <CarouselWrap><Carousel items={ carouselItems } initialSlide={ 0 } /></CarouselWrap>;
    }

    /**
     * Renders a project link.
     *
     * @return {XML}
     */
    renderProjectLink(project, linkText) {
        return (
            <Link to={ `/work/${project.uid}` }>
                { linkText }
            </Link>
        );
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        if (!this.state.projectContent) {
            return null;
        }

        const projectContent = this.state.projectContent.data;
        const prevProject = this.getPrevProject();
        const nextProject = this.getNextProject();
        const roleContent = projectContent.project_role[0] && projectContent.project_role[0].text;
        const techStackContent = projectContent.project_tech_stack[0] && projectContent.project_tech_stack[0].text;
        const visitWebsiteContent = projectContent.project_visit_website_link && projectContent.project_visit_website_link.url;

        const bannerStyle = {
            backgroundImage: 'url(' + projectContent.project_banner.url + ')',
        };

        const role = roleContent && <p><Span fontWeight="bold">Role: </Span>{ roleContent }</p>;
        const techStack = techStackContent && <p><Span fontWeight="bold">Tech stack: </Span>{ techStackContent }</p>;
        const visitWebsite = visitWebsiteContent && <p><a href={ visitWebsiteContent } target="_blank">Visit website</a></p>;

        let numOfImgs = 1;

        projectContent.project_imac.url && (numOfImgs += 1);
        projectContent.project_ipad.url && (numOfImgs += 1);
        projectContent.project_iphone.url && (numOfImgs += 1);

        const imacImg = (
            projectContent.project_imac.url && (
                <Imac
                    src={ projectContent.project_imac.url }
                    alt={ projectContent.project_imac.alt }
                    onLoad={ this.handleImageLoaded.bind(this) }
                />
            )
        );

        const ipadImg = (
            projectContent.project_ipad.url && (
                <Ipad
                    src={ projectContent.project_ipad.url }
                    alt={ projectContent.project_ipad.alt }
                    onLoad={ this.handleImageLoaded.bind(this) }
                />
            )
        );

        const iphoneImg = (
            projectContent.project_iphone.url && (
                <Iphone
                    src={ projectContent.project_iphone.url }
                    alt={ projectContent.project_iphone.alt }
                    onLoad={ this.handleImageLoaded.bind(this) }
                />
            )
        );

        return (
            <div id="project-page">
                <Banner style={ bannerStyle } />
                <Box position="relative" mt={[0, 0, 0, 300]} zIndex={ 2 }>
                    <ThemeDefault themeBg>
                        <Container>
                            <TextWrap textAlign="center">
                                <Box position="relative" top={[-33, -33, -37, -50]} display="inline-block">
                                    <ThemeDefault themeBg>
                                        <PageHeading py={ 2 } px={ 3 } mb={ 0 } display="inline-block">{ projectContent.project_title[0].text }</PageHeading>
                                    </ThemeDefault>
                                </Box>
                                <Contained maxWidth={ 0 } mt={ 3 }>
                                    <TextWrapMd textSpacing mt={[-33, -33, -37, -50]} linkStyle="default">
                                        { RichText.render(projectContent.project_main_text) }
                                        <Box mt={ 4 }>
                                            { role }
                                            { techStack }
                                            { visitWebsite }
                                        </Box>
                                    </TextWrapMd>
                                </Contained>
                            </TextWrap>
                        </Container>
                        <Box mt={ 500 } bg="gray.3">
                            <Box position="relative" top={ -500 } mb={ -500 }>
                                <Container>
                                    { imacImg }
                                    <TouchDevices>
                                        { ipadImg }
                                        { iphoneImg }
                                    </TouchDevices>
                                </Container>
                            </Box>
                            <Box position="relative" zIndex={ 1 } mt={ 5 } pb={ 6 }>
                                <Container>
                                    { this.renderProjectScreenshotCarousel() }
                                </Container>
                            </Box>
                            <TextWrap fontSize={[26, 26, 40]}>
                                <ProjectsNav direction="prev">{ prevProject && this.renderProjectLink(prevProject, '←') }</ProjectsNav>
                                <ProjectsNav direction="next">{ nextProject && this.renderProjectLink(nextProject, '→') }</ProjectsNav>
                            </TextWrap>
                        </Box>
                    </ThemeDefault>
                </Box>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
