import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
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
            <div id="project-page" className="p-b-xxl">
                <div className="project-banner" style={ bannerStyle }></div>
                <div className="container">
                    <div className="m-t-xxl">
                        <h1 className="text-centre font-uppercase font-size-xl">{ projectContent.project_title[0].text }</h1>
                        <div className="width-100 max-width-lg m-centre">{ RichText.render(projectContent.project_main_text) }</div>
                    </div>
                </div>
                <div className="bg-primary project-bg">
                    <div className="project-container container">
                        <img
                            src={ projectContent.project_imac.url }
                            alt={ projectContent.project_imac.alt }
                            className="block max-width-100 m-centre"
                        />
                        <div className="text-centre">
                            <img
                                src={ projectContent.project_ipad.url }
                                alt={ projectContent.project_ipad.alt }
                                className="inline-block max-width-md"
                            />
                            <img
                                src={ projectContent.project_iphone.url }
                                alt={ projectContent.project_iphone.alt }
                                className="inline-block max-width-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);
