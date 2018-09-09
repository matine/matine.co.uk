import React from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import SunIcon from '../ui/icons/SunIcon';
import PrintIcon from '../ui/icons/PrintIcon';
import { Container, Box, Contained, TextWrapXs, TextWrapSm, HeadingDecorated, TextXs, Span, Heading, HeadingXs, HeadingSm } from '../ui';

class CvPage extends Page {
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
                <TextWrapSm>{ introText && RichText.render(introText) }</TextWrapSm>
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
                <TextWrapXs listStyle="none">
                    <h2>Hello</h2>
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
                    { employmentTitle && <HeadingSm mb={ 0 }>{ employmentTitle[0].text }</HeadingSm> }
                    { employmentDesc && <TextWrapSm mb={ 0 }>{ RichText.render(employmentDesc) }</TextWrapSm> }
                </Box>
            );
        });

        return (
            <Box mb={ 5 }>
                { employmentsTitle && <HeadingDecorated>{ employmentsTitle[0].text }</HeadingDecorated> }
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
                    { educationDate && <HeadingSm mb={ 0 }>{ educationTitle[0].text }</HeadingSm> }
                    { educationDesc && <TextWrapSm mb={ 0 }>{ RichText.render(educationDesc) }</TextWrapSm> }
                </Box>
            );
        });

        return (
            <Box mb={ 5 }>
                { educationsTitle && <HeadingDecorated>{ educationsTitle[0].text }</HeadingDecorated> }
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
            <Box mb={ 5 }>
                { interestsTitle && <HeadingDecorated>{ interestsTitle[0].text }</HeadingDecorated> }
                <TextWrapSm>{ interestsText && RichText.render(interestsText) }</TextWrapSm>
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
                        <Box py={ 5 }>
                            <Heading fontSize={ 8 } mb={ 0 } caps>
                                <span className="pos-rel">
                                    <span className="hero__sun"><SunIcon size={ 80 }/></span>
                                    { globalContent.first_name[0].text }&nbsp;
                                </span>
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
                            <button onClick={ () => this.printPage() } className="print-button hover">
                                <PrintIcon />
                            </button>
                        </div>
                    </Contained>
                </Container>
            </Box>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvPage);
