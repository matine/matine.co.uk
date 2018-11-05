import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Link } from 'gatsby';
import withLayout from '../components/hoc/withLayout';
import { Box, Container, TextWrapMd, TextWrapSm, HeadingDecorated, Contained, Me } from '../components/ui';

class AboutPage extends Component {
    /**
     * Renders the image.
     *
     * @return {XML}
     */
    renderImage() {
        const globalContent = this.props.content.global;

        return (
            <Box mb={ 5 }>
                <Me style={{ backgroundImage: `url(${globalContent.about_me_image.url})` }} />
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
                <TextWrapMd textSpacing>{ introText && RichText.render(introText) }</TextWrapMd>
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
                <TextWrapSm listStyle="none" textSpacing headings>
                    { skillsText && RichText.render(skillsText) }
                </TextWrapSm>
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
                                <TextWrapMd textSpacing linkStyle="default">
                                    <p>View my full <Link to={ `/cv` }>CV</Link></p>
                                    <p>Mail me <a href="mailto:matine.chabrier@gmail.com" target="blank">matine.chabrier@gmail.com</a></p>
                                    <p>Peak at my code on <a href="https://github.com/matine/matine.co.uk" target="blank">Github</a></p>
                                </TextWrapMd>
                            </Box>
                        </Contained>
                    </Container>
                </Box>
            </div>
        );
    }
}

export const mapStateToProps = state => ({
    content: state.content,
});

export default connect(mapStateToProps)(withLayout(AboutPage));