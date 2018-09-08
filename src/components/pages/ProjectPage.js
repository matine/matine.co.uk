import React from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import Carousel from '../partials/Carousel';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import { ThemeDefault } from '../ui';

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
                    <div className="browser-window">
                        <div className="browser-window__controls"><span></span><span></span><span></span></div>
                    </div>
                    <img
                        className="width-100"
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

        return <Carousel items={ carouselItems } initialSlide={ 0 } />;
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
        const roleContent = projectContent.project_role[0] ? projectContent.project_role[0].text : null;
        const techStackContent = projectContent.project_tech_stack[0] ? projectContent.project_tech_stack[0].text : null;
        const visitWebsiteContent = projectContent.project_visit_website_link ? projectContent.project_visit_website_link.url : null;

        const bannerStyle = {
            backgroundImage: 'url(' + projectContent.project_banner.url + ')',
        };

        const role = roleContent ? <p><span className="font-weight-bold">Role: </span>{ roleContent }</p> : null;
        const techStack = techStackContent ? <p><span className="font-weight-bold">Tech stack: </span>{ techStackContent }</p> : null;
        const visitWebsite = visitWebsiteContent ? <p><a href={ visitWebsiteContent } target="_blank">Visit website</a></p> : null;

        let numOfImgs = 1;

        projectContent.project_imac.url && (numOfImgs += 1);
        projectContent.project_ipad.url && (numOfImgs += 1);
        projectContent.project_iphone.url && (numOfImgs += 1);

        const imacImg = (
            projectContent.project_imac.url ?
                <img
                    src={ projectContent.project_imac.url }
                    alt={ projectContent.project_imac.alt }
                    className="project__imac block m-centre"
                    onLoad={ this.handleImageLoaded.bind(this) }
                /> : null
        );

        const ipadImg = (
            projectContent.project_ipad.url ?
            <img
                src={ projectContent.project_ipad.url }
                alt={ projectContent.project_ipad.alt }
                className="project__ipad inline-block"
                onLoad={ this.handleImageLoaded.bind(this) }
            /> : null
        );

        const iphoneImg = (
            projectContent.project_iphone.url ?
            <img
                src={ projectContent.project_iphone.url }
                alt={ projectContent.project_iphone.alt }
                className="project__iphone inline-block"
                onLoad={ this.handleImageLoaded.bind(this) }
            /> : null
        );

        return (
            <div id="project-page">
                <div className="project-banner" style={ bannerStyle }></div>
                <div className="project-wrap">
                    <ThemeDefault bg>
                        <div className="container">
                            <div className="project-desc">
                                <h1 className="text-centre font-uppercase p-b-sm">{ projectContent.project_title[0].text }</h1>
                                <div className="width-100 max-width-lg m-centre">
                                    { RichText.render(projectContent.project_main_text) }
                                    <div className="m-t-md">
                                        { role }
                                        { techStack }
                                        { visitWebsite }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="project-bg">
                            <div className="project-container container pos-rel">
                                { imacImg }
                                <div className="project__touch-devices text-centre">
                                    { ipadImg }
                                    { iphoneImg }
                                </div>
                            </div>
                            <div className="project-screenshots-container container p-b-xxl">
                                { this.renderProjectScreenshotCarousel() }
                            </div>
                            <div className="projects-nav remove-link-styles font-size-xl">
                                <div className="projects-nav__prev hover">{ prevProject ? this.renderProjectLink(prevProject, '←') : null }</div>
                                <div className="projects-nav__next hover">{ nextProject ? this.renderProjectLink(nextProject, '→') : null }</div>
                            </div>
                        </div>
                    </ThemeDefault>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
