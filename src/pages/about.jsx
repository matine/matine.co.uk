import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { connect } from 'react-redux';
import withLayout from '../components/hoc/withLayout';
import * as actions from '../state/actions';
import { Box, Container, TextWrapMd, TextWrapSm, HeadingDecorated, Contained } from '../components/ui';

class AboutPage extends Component {
    /**
     * Renders the intro text.
     *
     * @return {XML}
     */
    renderIntro() {
        const {
            data,
        } = this.props;

        const globalContent = data.global.edges[0].node.data;

        const {
            me_intro_title,
            me_intro_text,
        } = globalContent;

        if (!me_intro_title && !me_intro_text) {
            return null;
        }

        return (
            <Box mb={ 5 }>
                { me_intro_title &&
                    <HeadingDecorated>
                        { me_intro_title.text }
                    </HeadingDecorated>
                }
                <TextWrapMd
                    textSpacing
                >
                    { me_intro_text &&
                        <div
                            dangerouslySetInnerHTML={
                                {
                                    __html: me_intro_text.html,
                                }
                            }
                        />
                    }
                </TextWrapMd>
            </Box>
        );
    }

    /**
     * Renders the skills text.
     *
     * @return {XML}
     */
    renderSkills() {
        const {
            data,
        } = this.props;

        const globalContent = data.global.edges[0].node.data;

        const {
            me_skills_title,
            me_skills_text,
        } = globalContent;

        if (!me_skills_title && !me_skills_text) {
            return null;
        }

        return (
            <Box mb={ 5 }>
                { me_skills_title &&
                    <HeadingDecorated>
                        { me_skills_title.text }
                    </HeadingDecorated>
                }
                <TextWrapSm
                    listStyle="none"
                    textSpacing
                    headings
                >
                    { me_skills_text &&
                        <div
                            dangerouslySetInnerHTML={
                                {
                                    __html: me_skills_text.html,
                                }
                            }
                        />
                    }
                </TextWrapSm>
            </Box>
        );
    }

    /**
     * Renders the component.
     *
     * @return {ReactNode}
     */
    render() {
        const {
            data,
        } = this.props;

        const globalContent = data.global.edges[0].node.data;
        const meImage = globalContent.about_me_image.localFile.childImageSharp.fluid;

        if (!globalContent) {
            return null;
        }

        return (
            <div id="about-page">
                <Box pb={ 5 }>
                    <Container>
                        <Contained maxWidth={ 3 }>
                            <Box mb={ 5 }>
                                <Image
                                    fluid={ meImage }
                                />
                            </Box>
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
        )
    }
}

AboutPage.propTypes = {
    data: PropTypes.shape({
        projects: PropTypes.shape({
            edges: PropTypes.array.isRequired,
        }),
    }).isRequired,
};

export const mapStateToProps = state => ({
    theme: state.theme,
});

export const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(actions.setTheme(theme)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(AboutPage));

export const pageQuery = graphql`
    query AboutQuery {
        global: allPrismicGlobal(sort: { fields: [last_publication_date], order: DESC }) {
            edges {
                node {
                    uid
                    data {
                        me_intro_title {
                            text
                        }
                        me_intro_text {
                            html
                        }
                        me_skills_title {
                            text
                        }
                        me_skills_text {
                            html
                        }
                        about_me_image {
                            localFile {
                                childImageSharp {
                                    fluid(
                                        maxWidth: 300
                                        quality: 90
                                        traceSVG: { color: "#021212" }
                                        cropFocus: ENTROPY
                                    ) {
                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
