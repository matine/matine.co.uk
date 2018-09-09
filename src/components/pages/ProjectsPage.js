import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import { TextMd, Grid, Col } from '../ui';
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
        }
    }

    hoverOnThumbnail(index) {
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
                <Col
                    key={ index }
                    width={[ 1, 1, 1, 1/3 ]}
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
                                    className="width-100 pos-abs pin-top-left thumbnail-2"
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
                </Col>
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
                    <TextMd caps fontWeight="bold" size={ 4 }>Frontend developer</TextMd>
                </div>
                <Grid gutter={ 0 }>
                    { this.renderProjectListItems() }
                </Grid>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
