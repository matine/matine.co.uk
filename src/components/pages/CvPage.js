import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import SunIcon from '../ui/icons/SunIcon';

class CvPage extends Page {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);
    }

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
                <div className="font-size-xs">{ introText && RichText.render(introText) }</div>
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
            <div className="cv__section">
                { skillsTitle && <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">{ skillsTitle[0].text }</h3> }
                <div className="lists--no-styles font-size-sm">
                    { skillsText && RichText.render(skillsText) }
                </div>
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
                <div className="font-size-xs">{ interestsText && RichText.render(interestsText) }</div>
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
                            <span className="font-weight-bold">Frontend developer</span> → <span><a href="#">matine.co.uk</a> → <span><a href="#">matine.chabrier@gmail.com</a></span></span>
                        </p>
                    </div>
                    { this.renderIntro() }
                    { this.renderSkills() }
                    <div className="cv__section">
                        <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">I've been around</h3>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xxs font-uppercase colour-light">March 2017 - August 2018</h4>
                            <h4 className="font-size-md p-b-xxs">Pod Point → Frontend web/app developer</h4>
                            <p>Projects included... UI Toolkit, Craft CMS website, Checkout React web app, React Native app.</p>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xxs font-uppercase colour-light">January 2015 - March 2017</h4>
                            <h4 className="font-size-md p-b-xxs">iris Worldwide → Frontend web developer</h4>
                            <p>Clients included... BMW Mini, Samsung, Dominos, Adidas, Nectar, Shell, Value Retail.</p>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xxs font-uppercase colour-light">April 2013 - January 2015</h4>
                            <h4 className="font-size-md p-b-xxs">Karmarama → Frontend web developer</h4>
                            <p>Clients included... BT, Honda, Costa, B&amp;Q, British Gas, Fairtrade, Jus Rol, Two Fingers Brewing.</p>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xxs font-uppercase colour-light">June 2012 - April 2013</h4>
                            <h4 className="font-size-md p-b-xxs">TBWA\PW → Creative artworker</h4>
                            <p>Clients included... Glaxosmithkline, Pfizer, Roche, Q-Med, Actelion, and Abbot.</p>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xxs font-uppercase colour-light">April 2011 - June 2012</h4>
                            <h4 className="font-size-md p-b-xxs">Freelance for Tag Worldwide in CHI &amp; Partners, Krow, Brooklyn Brothers, Anomaly → Artworker</h4>
                            <p>Clients included... British Gas, TalkTalk, The Times, Argos, Lexus, Fiat, RBS, Anchor, Samsung and Converse.</p>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xxs font-uppercase colour-light">September 2009 - April 2011</h4>
                            <h4 className="font-size-md p-b-xxs">Sports Management Group → Magazine designer</h4>
                            <p>Clients included... Sony, Ferarri, Deutsche Bank, Swiss Watch.</p>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xxs font-uppercase colour-light">March 2009 - August 2009</h4>
                            <h4 className="font-size-md">Principality Group → PA to Group CEO</h4>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xs font-uppercase colour-light">May 2008 - March 2009</h4>
                            <h4 className="font-size-md">Freelance: Running Inc., Blur 1, Exposure, Benned Noir Films, Rainbow, Absolute, Partizan, Little Bird → Production Manager, Production Assistant, Runner</h4>
                        </div>
                    </div>
                    <div className="cv__section">
                        <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">I went to school</h3>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xs font-uppercase colour-light">2011 - 2012</h4>
                            <h4 className="font-size-md p-b-xxs">Greenwich University → MA Web Design &amp; Content Planning (Distinction)</h4>
                            <p>Design for the web, Frontend development, PHP, Content Management Systems, Web Marketing</p>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xs font-uppercase colour-light">2005 - 2008</h4>
                            <h4 className="font-size-md p-b-xxs">Southampton Solent University → BA Multimedia Design (2.1)</h4>
                            <p>Web Design, Game Design, Animation, Moving Image, Film</p>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="p-b-none font-size-xs font-uppercase colour-light">2003 - 2005</h4>
                            <h4 className="font-size-md p-b-xxs">City of Westminster College → AVCE Art &amp; Design (Merit)</h4>
                            <p>Awarded £1000 prize for Best Digital Animation by Creative in the City Awards at SkillCity</p>
                        </div>
                    </div>
                    { this.renderInterests() }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvPage);
