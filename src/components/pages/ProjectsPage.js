import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import SunIcon from '../ui/icons/SunIcon';

class ProjectsPage extends Page {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            thumbnailVisible: false,
            numImagesLoaded: 1,
        }

        this.hoverOnThumbnail = this.hoverOnThumbnail.bind(this);
        this.hoverOffThumbnail = this.hoverOffThumbnail.bind(this);
    }

    /**
     * Handles when an image thumbnail is loaded.
     *
     * @return {void}
     */
    handleImageLoaded() {
        const {
            setImgsLoading,
        } = this.props;

        const numOfImages = this.props.content.projects.length;

        this.setState({ numImagesLoaded: this.state.numImagesLoaded + 1 });

        if (this.state.numImagesLoaded === numOfImages) {
            setImgsLoading(false);
            this.scrollEvents();
        }
    }

    /**
     * Scroll events.
     *
     * @return {void}
     */
    scrollEvents() {
        const pageHeight = document.getElementById('projects-page').getBoundingClientRect().height;
        const iterationAmount = 50;
        const numberOfTimes = Math.floor(pageHeight / iterationAmount);

        let scrollArray = [];

        for (var i = 0; i < numberOfTimes; i++) {
            let j = i++;

            scrollArray.push({
                end: iterationAmount * i,
                start: iterationAmount * j,
            });
        };

        window.onscroll = () => {
            scrollArray.forEach((scrollNumbers, index) => {
                const start = scrollNumbers.start;
                const end = scrollNumbers.end;
                const offset = window.pageYOffset;

                if (index % 2) {
                    if (offset > start && offset < end)
                        this.setState({thumbnailVisible: true});
                } else {
                    if (offset > start && offset < end)
                        this.setState({thumbnailVisible: false});
                }
            });
        };
    }

    hoverOnThumbnail() {
        const {
            setTheme,
        } = this.props;

        setTheme('inverted');
    }

    hoverOffThumbnail() {
        const {
            setTheme,
        } = this.props;

        setTheme('default');
    }

    /**
     * Renders the project list items.
     *
     * @return {XML}
     */
    renderProjectListItems() {
        const {
            content,
        } = this.props;

        const projectsContent = content.projects;

        return projectsContent.map((project, index) => {
            const projectData = project.data;
            const projectTitle = projectData.project_title[0].text;

            return (
                <div
                    key={ index }
                    className="grid__col grid__col-md-4"
                    onMouseEnter={ this.hoverOnThumbnail }
                    onMouseLeave={ this.hoverOffThumbnail }
                >
                    <div className="project-thumbnail pos-rel">
                        <Link
                            to={ `/work/${project.uid}` }>
                            <div className="project-thumbnail__img pos-rel z-index-1">
                                <img
                                    src={ projectData.project_thumbnail.url }
                                    alt={ projectData.project_thumbnail.alt }
                                    onLoad={ this.handleImageLoaded.bind(this) }
                                    className="width-100"
                                />
                                <img
                                    className={ this.state.thumbnailVisible ? "width-100 pos-abs pin-top-left thumbnail-2" : "width-100 pos-abs pin-top-left thumbnail-2 hidden"}
                                    src={ projectData.project_thumbnail_2.url }
                                    alt={ projectData.project_thumbnail_2.alt }
                                />
                            </div>
                            <div className="project-thumbnail__hover width-100 height-100 pos-abs pin-top-left">
                                <div className="width-100 pos-abs pin-bottom-left text-centre">
                                    <h3 className="project-thumbnail__title font-uppercase font-weight-bold remove-link-style colour-base">{ projectTitle }</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            );
        });
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const globalContent = this.props.content.global;

        return (
            <div id="projects-page" className="container container--wide text-centre p-b-xxl">
                <div className="hero">
                    <h1 className="hero__title font-uppercase">
                        <span className="pos-rel">
                            <span className="hero__sun"><SunIcon size={ 80 }/></span>
                            { globalContent.first_name[0].text } 
                        </span><br/>
                        <span>{ globalContent.surname[0].text }</span>
                    </h1>
                    <p className="font-uppercase font-weight-bold font-size-lg">Frontend developer</p>
                </div>
                <div className="grid grid--gutter-none">
                    { this.renderProjectListItems() }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
