import React from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import SunIcon from '../ui/icons/SunIcon';
import PrintIcon from '../ui/icons/PrintIcon';

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
            <div className="cv__section">
                { introTitle && <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">{ introTitle[0].text }</h3> }
                <div className="font-size-sm">{ introText && RichText.render(introText) }</div>
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
            const pageBreak = element.me_employment_page_break;

            return (
                <div key={ index } className="cv__subsection">
                    { employmentDate && <h4 className="p-b-none font-size-xxs font-uppercase colour-light">{ employmentDate[0].text }</h4> }
                    { employmentTitle && <h4 className="font-size-md p-b-xxs">{ employmentTitle[0].text }</h4> }
                    { employmentDesc && RichText.render(employmentDesc) }
                    { pageBreak && <div className="print-page-break"></div> }
                </div>
            );
        });

        return (
            <div className="cv__section">
                { employmentsTitle && <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">{ employmentsTitle[0].text }</h3> }
                { renderEmployments }
            </div>
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
                <div key={ index } className="cv__subsection">
                    { educationDate && <h4 className="p-b-none font-size-xxs font-uppercase colour-light">{ educationDate[0].text }</h4> }
                    { educationTitle && <h4 className="font-size-md p-b-xxs">{ educationTitle[0].text }</h4> }
                    { educationDesc && RichText.render(educationDesc) }
                </div>
            );
        });

        return (
            <div className="cv__section">
                { educationsTitle && <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">{ educationsTitle[0].text }</h3> }
                { renderEducations }
            </div>
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
            <div className="cv__section">
                { interestsTitle && <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">{ interestsTitle[0].text }</h3> }
                <div className="font-size-sm">{ interestsText && RichText.render(interestsText) }</div>
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
            <div id="cv-page" className="container p-b-xxl">
                <div className="cv font-size-xs max-width-text m-centre p-b-xxl">
                    <div className="hero">
                        <h1 className="hero__title font-uppercase">
                            <span className="pos-rel">
                                <span className="hero__sun"><SunIcon size={ 80 }/></span>
                                { globalContent.first_name[0].text }&nbsp;
                            </span>
                            <span>{ globalContent.surname[0].text }</span>
                        </h1>
                        <p className="hero__subtitle font-uppercase p-b-xxs">
                            <span className="font-weight-bold">Frontend developer</span> → <span><a href="http://matine.co.uk">matine.co.uk</a> → <span><a href="mailto:matine.chabrier@gmail.com">matine.chabrier@gmail.com</a></span></span>
                        </p>
                    </div>
                    { this.renderIntro() }
                    { this.renderSkills() }
                    { this.renderEmployments() }
                    { this.renderEducations() }
                    { this.renderInterests() }

                    <div>
                        <button>
                            <PrintIcon />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvPage);
