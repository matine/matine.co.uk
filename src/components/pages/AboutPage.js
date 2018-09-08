import React from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Link } from 'react-router-dom';
import { Box, Container, Text, TextWrap, HeadingDecorated, Contained } from '../ui';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';

class AboutPage extends Page {
    /**
     * Things to do when the component recieves props.
     *
     * @return {void}
     */
    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        setTimeout(() => {
            this.props.setImgsLoading(false);
        }, 1);
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
            <Box mb={ 5 }>
                <div className="me" style={{ backgroundImage: `url(${globalContent.about_me_image.url})` }} />
            </Box>
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
            <Box mb={ 5 }>
                { introTitle && <HeadingDecorated>{ introTitle[0].text }</HeadingDecorated> }
                <TextWrap>{ introText && RichText.render(introText) }</TextWrap>
            </Box>
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
            <Box mb={ 5 }>
                { skillsTitle && <HeadingDecorated>{ skillsTitle[0].text }</HeadingDecorated> }
                <TextWrap size={ 1 } listStyle="none">
                    { skillsText && RichText.render(skillsText) }
                </TextWrap>
            </Box>
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
                <Box pb={ 5 }>
                    <Container>
                        <Contained maxWidth={ 3 }>
                            { this.renderImage() }
                            { this.renderIntro() }
                            { this.renderSkills() }
                            <Box mb={ 5 }>
                                <Text>View my full <Link to={ `/cv` }>CV</Link></Text>
                                <Text>Mail me <a href="mailto:matine.chabrier@gmail.com" target="blank">matine.chabrier@gmail.com</a></Text>
                                <Text>Peak at my code on <a href="https://github.com/matine/matine.co.uk" target="blank">Github</a></Text>
                            </Box>
                        </Contained>
                    </Container>
                </Box>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
