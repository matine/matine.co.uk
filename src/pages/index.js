import React, { Component } from 'react'
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import withLayout from '../components/hoc/withLayout';
import * as actions from '../state/actions';
import { Text, Grid, Col, Heading, ProjectThumbnail, Fixed, Box, Image, ThemeDefault, Container, SvgWrap, Flex } from '../components/ui';
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
                    <ThemeDefault themeProjectThumbnails>
                        <ProjectThumbnail className="project-thumbnail">
                            <Link
                                to={ `/work/${project.uid}` }>
                                <Box position="relative" zIndex={ 1 } className="project-thumbnail__images">
                                    <Image
                                        src={ projectData.project_thumbnail.url }
                                        alt={ projectData.project_thumbnail.alt }
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
                                <Fixed width={ 1 } height="100%" className="project-thumbnail__hover">
                                    <Box width={ 1 } position="absolute" bottom={ 0 } left={ 0 }>
                                        <Box width="100%" pt="22.66%">
                                            <Fixed px={ 2 }>
                                                <Flex flex={ 1 } alignItems="center" justifyContent="center" height="100%">
                                                    <Heading caps fontSize={[16, 18, 22, 16, 20]} mb={ 0 } pb={ 0 } fontWeight="bold" textAlign="center">{ projectTitle }</Heading>
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
     * @return {XML}
     */
    render() {
        const globalContent = this.props.content.global;

        return (
            <div id="projects-page">
                <Container pb={ 5 } maxWidth={ 1500 }>
                    <Box py={[5, 5, 6]} mt={ 5 }>
                        <Heading caps fontSize={[46, 46, 90]} textAlign="center" lineHeight={ .85 } mb={[3, 3, 4]}>
                            <Box display="inline-block" position="relative">
                                <Box
                                    display="inline-block"
                                    position="absolute"
                                    top={['-38px', '-38px', '-75px',]}
                                    left="39%"
                                >
                                    <SvgWrap color="primary" width={[46, 46, 90]}>
                                        <SunIcon />
                                    </SvgWrap>
                                </Box>
                                { globalContent.first_name[0].text } 
                            </Box><br/>
                            <span>{ globalContent.surname[0].text }</span>
                        </Heading>
                        <Text caps fontWeight="bold" textAlign="center" fontSize={[16, 16, 26]}>Frontend developer</Text>
                    </Box>
                    <Grid gutter={ 1 }>
                        { this.renderProjectListItems() }
                    </Grid>
                </Container>
            </div>
        )
    }
}

export const mapStateToProps = state => ({
    content: state.content,
    ui: state.ui,
    theme: state.theme,
});

export const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(actions.setTheme(theme)),
    setImgsLoading: imgsLoading => dispatch(actions.setImgsLoading(imgsLoading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(IndexPage));
