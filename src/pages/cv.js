import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import withLayout from '../components/hoc/withLayout';
import SunIcon from '../components/ui/icons/SunIcon';
import PrintIcon from '../components/ui/icons/PrintIcon';
import { Container, Box, Contained, TextWrapXs, TextWrapSm, HeadingDecorated, TextXs, TextSm, Span, Heading, HeadingXs, HeadingMd, SvgWrap, ButtonHover } from '../components/ui';

class CvPage extends Component {
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
            <Box mb={ 5 } className="cv-section">
                { introTitle && <HeadingDecorated className="cv-section__heading">{ introTitle[0].text }</HeadingDecorated> }
                <TextWrapSm textSpacing>{ introText && RichText.render(introText) }</TextWrapSm>
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
            <Box mb={ 5 } className="cv-section">
                { skillsTitle && <HeadingDecorated className="cv-section__heading">{ skillsTitle[0].text }</HeadingDecorated> }
                <TextWrapXs textSpacing headings listStyle="none">
                    { skillsText && RichText.render(skillsText) }
                </TextWrapXs>
            </Box>
        );
    }

    /**
     * Renders the employments list.
     *
     * @return {XML}
     */
    renderEmployments() {
        const globalContent = this.props.content.global;
        const employmentsTitle = globalContent.me_employment_title;
        const employmentsList = globalContent.me_employments;

        if (!employmentsList && !employmentsTitle) {
            return null;
        }

        const renderEmployments = employmentsList.map((element, index) => {
            const employmentDate = element.me_employment_date;
            const employmentTitle = element.me_employment_title;
            const employmentDesc = element.me_employment_description;

            return (
                <Box key={ index } mb={ 4 }>
                    { employmentDate && <HeadingXs caps color="light" mb={ 1 }>{ employmentDate[0].text }</HeadingXs> }
                    { employmentTitle && <HeadingMd mb={ 0 }>{ employmentTitle[0].text }</HeadingMd> }
                    { employmentDesc && <TextWrapSm textSpacing mb={ 0 }>{ RichText.render(employmentDesc) }</TextWrapSm> }
                </Box>
            );
        });

        return (
            <Box mb={ 5 } className="cv-section">
                { employmentsTitle && <HeadingDecorated className="cv-section__heading">{ employmentsTitle[0].text }</HeadingDecorated> }
                { renderEmployments }
            </Box>
        );
    }

    /**
     * Renders the educations list.
     *
     * @return {XML}
     */
    renderEducations() {
        const globalContent = this.props.content.global;
        const educationsTitle = globalContent.me_education_title;
        const educationsList = globalContent.me_educations;

        if (!educationsList && !educationsTitle) {
            return null;
        }

        const renderEducations = educationsList.map((element, index) => {
            const educationDate = element.me_education_date;
            const educationTitle = element.me_education_title1;
            const educationDesc = element.me_education_description;

            return (
                <Box key={ index } mb={ 4 }>
                    { educationDate && <HeadingXs caps color="light" mb={ 1 }>{ educationDate[0].text }</HeadingXs> }
                    { educationDate && <HeadingMd mb={ 0 }>{ educationTitle[0].text }</HeadingMd> }
                    { educationDesc && <TextWrapSm textSpacing mb={ 0 }>{ RichText.render(educationDesc) }</TextWrapSm> }
                </Box>
            );
        });

        return (
            <Box mb={ 5 } className="cv-section">
                { educationsTitle && <HeadingDecorated className="cv-section__heading">{ educationsTitle[0].text }</HeadingDecorated> }
                { renderEducations }
            </Box>
        );
    }

    /**
     * Renders the interests text.
     *
     * @return {XML}
     */
    renderInterests() {
        const globalContent = this.props.content.global;
        const interestsTitle = globalContent.me_interests_title;
        const interestsText = globalContent.me_interests_text;

        if (!interestsTitle && !interestsText) {
            return null;
        }

        return (
            <Box mb={ 5 } className="cv-section">
                { interestsTitle && <HeadingDecorated className="cv-section__heading">{ interestsTitle[0].text }</HeadingDecorated> }
                <TextWrapSm textSpacing>{ interestsText && RichText.render(interestsText) }</TextWrapSm>
            </Box>
        );
    }

    /**
     * Prints the page.
     *
     * @return {void}
     */
    printPage() {
        window.print();
        return false;
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
            <Box id="cv-page" pb={ 5 }>
                <Container>
                    <Contained maxWidth={ 4 } pb={ 5 }>
                        <Box pt={ 5 } pb={ 4 }>
                            <Heading fontSize={ [40, 40, 50] } mb={ 2 } ml={ -1 } lineHeight={ .85 } caps>
                                <Box position="relative" display="inline-block">
                                    <Box
                                        display="inline-block"
                                        position="absolute"
                                        top={['-35px', '-35px', '-43px',]}
                                        left="36%"
                                    >
                                        <SvgWrap color="primary" width={[40, 40, 50]}>
                                            <SunIcon />
                                        </SvgWrap>
                                    </Box>
                                    { globalContent.first_name[0].text }&nbsp;
                                </Box>
                                <span>{ globalContent.surname[0].text }</span>
                            </Heading>
                            <TextXs pb={ 1 } caps>
                                <Span fontWeight="bold">Frontend developer</Span> → <Span><a href="http://matine.co.uk">matine.co.uk</a> → <Span><a href="mailto:matine.chabrier@gmail.com">matine.chabrier@gmail.com</a></Span></Span>
                            </TextXs>
                        </Box>
                        { this.renderIntro() }
                        { this.renderSkills() }
                        { this.renderEmployments() }
                        { this.renderEducations() }
                        { this.renderInterests() }

                        <div>                            
                            <ButtonHover
                                hover="big"
                                onClick={ () => this.printPage() }
                                className="hide-for-print"
                            >
                                <SvgWrap width={ 30 }>
                                    <PrintIcon />
                                </SvgWrap>
                                <Box className="show-on-hover" position="absolute" mt="50px">
                                    <TextSm fontWeight="bold">Prints best in Chrome!</TextSm>
                                </Box>
                            </ButtonHover>
                        </div>
                    </Contained>
                </Container>
            </Box>
        );
    }
}

export const mapStateToProps = state => ({
    content: state.content,
});

export default connect(mapStateToProps)(withLayout(CvPage));
