import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import Carousel from '../partials/Carousel';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';

class ProjectPage extends Page {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);
        this.state = {
            projectContent: null,
        }

        props.setTheme('default');
        props.setImgsLoading(false);
    }

    /**
     * Before the component has mounted.
     *
     * @return {void}
     */
    componentWillMount() {
        const {
            setTheme,
        } = this.props;

        setTheme('default');
    }

    /**
     * Things to do before the component renders.
     *
     * @return {void}
     */
    componentWillMount() {
        this.getProjectContent();
    }

    /**
     * Gets the current project content from the array of projects and saves to state.
     *
     * @return {void}
     */
    getProjectContent() {
        const projectsContent = this.props.content.projects;

        projectsContent
            .filter(project => project.uid === this.props.match.params.uid)
            .map((project, index) => this.setState({ projectContent: project }));
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
                    />
                </div>
            );
        });

        return <Carousel items={ carouselItems } />;
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

        const bannerStyle = {
            backgroundImage: 'url(' + projectContent.project_banner.url + ')',
        };

        return (
            <div id="project-page">
                <div className="project-banner" style={ bannerStyle }></div>
                <div className="container">
                    <div className="m-t-xxl">
                        <h1 className="text-centre font-uppercase p-b-sm">{ projectContent.project_title[0].text }</h1>
                        <div className="width-100 max-width-lg m-centre">{ RichText.render(projectContent.project_main_text) }</div>
                    </div>
                </div>
                <div className="project-bg">
                    <div className="project-container container pos-rel">
                        <img
                            src={ projectContent.project_imac.url }
                            alt={ projectContent.project_imac.alt }
                            className="project__imac block max-width-100 m-centre"
                        />
                        <div className="project__touch-devices text-centre">
                            <img
                                src={ projectContent.project_ipad.url }
                                alt={ projectContent.project_ipad.alt }
                                className="project__ipad inline-block max-width-md"
                            />
                            <img
                                src={ projectContent.project_iphone.url }
                                alt={ projectContent.project_iphone.alt }
                                className="project__iphone inline-block max-width-sm"
                            />
                        </div>
                    </div>
                    <div className="container m-t-md p-b-xxl">
                        { this.renderProjectScreenshotCarousel() }
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
