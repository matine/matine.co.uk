import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import { TextMd, Grid, Col, Heading, ProjectThumbnail, Fixed, Box, Image, ThemeDefault } from '../ui';
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
                    <ThemeDefault projectThumbnails>
                        <ProjectThumbnail className="project-thumbnail">
                            <Link
                                to={ `/work/${project.uid}` }>
                                <Box position="relative" zIndex={ 1 } className="project-thumbnail__images">
                                    <Image
                                        src={ projectData.project_thumbnail.url }
                                        alt={ projectData.project_thumbnail.alt }
                                        onLoad={ this.handleImageLoaded.bind(this) }
                                        width={ 1 }
                                    />
                                    <Image
                                        width={ 1 }
                                        position="absolute"
                                        top={ 0 }
                                        left={ 0 }
                                        className="project-thumbnail__image2"
                                        src={ projectData.project_thumbnail_2.url }
                                        alt={ projectData.project_thumbnail_2.alt }
                                    />
                                </Box>
                                <Fixed className="project-thumbnail__hover">
                                    <Box width={ 1 } position="absolute" bottom={ 0 } left={ 0 }>
                                        <Heading caps fontSize={[12, 14, 16, 20]} mb={[3, 3, 2, 4]} fontWeight="bold" textAlign="center">{ projectTitle }</Heading>
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
