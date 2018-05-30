import React from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';

class AboutPage extends Page {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.handleImageLoaded = this.handleImageLoaded.bind(this);
    }

    /**
     * Handles when an image is loaded.
     *
     * @return {void}
     */
    handleImageLoaded() {
        const {
            setImgsLoading,
        } = this.props;

        setImgsLoading(false);
    }

    /**
     * Renders the image.
     *
     * @return {XML}
     */
    renderImage() {
        const globalContent = this.props.content.global;

        return (
            <div className="m-b-lg">
                <img
                    src={ globalContent.about_me_image.url }
                    alt={ globalContent.about_me_image.alt }
                    className="me"
                    onLoad={ this.handleImageLoaded }
                />
            </div>
        );
    }

    /**
     * Renders the intro text.
     *
     * @return {XML}
     */
    renderIntro() {
        const globalContent = this.props.content.global;
        const introTitle = globalContent.me_intro_title;
        const introText = globalContent.me_intro_text;

        if (!introTitle && !introText) {
            return null;
        }

        return (
            <div className="cv__section">
                { introTitle && <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">{ introTitle[0].text }</h3> }
                <div className="font-size-md">{ introText && RichText.render(introText) }</div>
            </div>
        );
    }

    /**
     * Renders the skills text.
     *
     * @return {XML}
     */
    renderSkills() {
        const globalContent = this.props.content.global;
        const skillsTitle = globalContent.me_skills_title;
        const skillsText = globalContent.me_skills_text;

        if (!skillsTitle && !skillsText) {
            return null;
        }

        return (
            <div className="cv__section cv__section--skills">
                { skillsTitle && <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">{ skillsTitle[0].text }</h3> }
                <div className="lists--no-styles font-size-xs">
                    { skillsText && RichText.render(skillsText) }
                </div>
            </div>
        );
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const globalContent = this.props.content.global;

        if (!globalContent) {
            return null;
        }

        return (
            <div id="about-page">
                <div className="about-page container p-b-xxl">
                    <div className="max-width-text m-centre p-t-lg p-b-xxl cv">
                        { this.renderImage() }
                        { this.renderIntro() }
                        { this.renderSkills() }
                        <div className="cv__section">
                            <p>View my full <Link to={ `/cv` }>CV</Link></p>
                            <p>Mail me <a href="mailto:matine.chabrier@gmail.com" target="blank">matine.chabrier@gmail.com</a></p>
                            <p>Peak at my code on <a href="https://github.com/matine/matine.co.uk" target="blank">Github</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
