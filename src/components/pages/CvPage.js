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
                    <div className="cv__section">
                        <div className="font-size-xs">
                            <p>A sociable, creative and highly motivated frontend developer with 5 years experience in building websites and more recently LOVING working with React JS / React Native and Redux to build apps.</p>
                            <p>With great appreciation for beautiful design and an excellent eye for detail, I get thrills out of producing polished, responsive builds that work elegantly at every screen size. Clean and structured code also makes me very happy.</p>
                        </div>
                    </div>
                    <div className="cv__section">
                        <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">I got some skills</h3>
                        <div className="cv__subsection">
                            <h4 className="font-size-md p-b-xs">Good working knowledge</h4>
                            <ul className="list--no-styles">
                                <li><strong>Frontend core → </strong> HTML(5), CSS(3), JavaScript (ECMAScript 6)</li>
                                <li><strong>JS frameworks → </strong>React JS, React Native, Redux, jQuery</li>
                                <li><strong>CSS pre-processors and methodologies → </strong> SASS, BEM, SMACSS, Atomic/Functional CSS</li>
                                <li><strong>Templating → </strong> Handlebars, Twig</li>
                                <li><strong>Content management → </strong> Prismic headless CMS, Craft CMS, WordPress</li>
                                <li><strong>Package managers and task runners → </strong> NPM, Yarn, Gulp, Grunt, Webpack, Browserify</li>
                                <li><strong>Version control → </strong>GIT, Github, Bitbucket, PR reviews</li>
                                <li><strong>Design and UX → </strong>Photoshop, Illustrator, InDesign</li>
                                <li><strong>Agile principles → </strong>Jira, Trello, Kanban, scrum, daily standups, tech specs, sprint planning, estimations</li>
                            </ul>
                        </div>
                        <div className="cv__subsection">
                            <h4 className="font-size-md p-b-xs">Some working knowledge</h4>
                            <ul className="list--no-styles">
                                <li><strong>Backend → </strong>PHP</li>
                                <li><strong>Frameworks → </strong>Ruby on Rails, Angular JS 1</li>
                                <li><strong>Native mobile → </strong>Swift, XCode</li>
                                <li><strong>Testing → </strong> Jest, Enzyme</li>
                                <li><strong>Design and UX → </strong>Sketch, InVision</li>
                            </ul>
                        </div>
                    </div>
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
                    <div className="cv__section">
                        <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">I also do other things</h3>
                        <div className="font-size-xs">
                            <p>I am a London original with a very French sounding name. Having many interests, I find I'm at my happiest when I'm learning something new or making something great!</p>
                            <p>When I'm not making codes, I make things with my hands. From DIY to some more sofisticated woodwork (ask to see the very impressive chest of drawers I built). I also dabble in eco building and permaculture design and am partial to a spot of life drawing or making a clay pot.</p>
                            <p>Dancing is another thing I can't get enough of. Right now Salsa and Latin Hustle are the favourites.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CvPage);
