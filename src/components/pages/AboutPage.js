import React from 'react';
import PropTypes from 'prop-types';
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
            <div id="about-page" className="container p-b-xxl">
                <div className="max-width-text m-centre p-t-lg p-b-xxl cv">
                    <div className="cv__section">
                        <img
                            src={ globalContent.about_me_image.url }
                            alt={ globalContent.about_me_image.alt }
                            className="me"
                            onLoad={ this.handleImageLoaded }
                        />
                        <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">$Whoami</h3>
                        <div>
                            <p>A sociable, creative and highly motivated frontend developer with 5 years experience in building websites and more recently LOVING working with React JS / React Native and Redux to build apps.</p>
                            <p>With great appreciation for beautiful design and an excellent eye for detail, I get thrills out of producing polished, responsive builds that work elegantly at every screen size. Clean and structured code also makes me very happy.</p>
                        </div>
                    </div>
                    <div className="cv__section">
                        <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">I got some skills</h3>
                        <div className="cv__subsection">
                            <h4 className="p-b-xs font-size-lg">Good working knowledge</h4>
                            <ul className="list--no-styles font-size-sm">
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
                            <h4 className="p-b-xs font-size-lg">Some working knowledge</h4>
                            <ul className="list--no-styles font-size-sm">
                                <li><strong>Backend → </strong>PHP</li>
                                <li><strong>Frameworks → </strong>Ruby on Rails, Angular JS 1</li>
                                <li><strong>Native mobile → </strong>Swift, XCode</li>
                                <li><strong>Testing → </strong> Jest, Enzyme</li>
                                <li><strong>Design and UX → </strong>Sketch, InVision</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cv__section">
                        <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-md">I also do other things</h3>
                        <div>
                            <p>I am a London original with a very French sounding name. Having many interests, I find I'm at my happiest when I'm learning something new or making something great!</p>
                            <p>When I'm not making codes, I make things with my hands. From DIY to some more sofisticated woodwork (ask to see the very impressive chest of drawers I built). I also dabble in eco building and permaculture design and am partial to a spot of life drawing or making a clay pot.</p>
                            <p>Dancing is another thing I can't get enough of. Right now Salsa and Latin Hustle are the favourites.</p>
                        </div>
                    </div>
                    <div className="cv__section">
                        <p>View my full <Link to={ `/cv` }>CV</Link></p>
                        <p>Mail me <a href="mailto:matine.chabrier@gmail.com" target="blank">matine.chabrier@gmail.com</a></p>
                        <p>Peak at my code on <a href="https://github.com/matine/matine.co.uk" target="blank">Github</a></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
