import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Image from 'gatsby-image';
import { connect } from 'react-redux';
import withLayout from '../components/hoc/withLayout';
import * as actions from '../state/actions';
import SunIcon from '../components/ui/icons/SunIcon';
import PrintIcon from '../components/ui/icons/PrintIcon';
import { Container, Box, Contained, TextWrapMd, TextWrapSm, HeadingDecorated, TextXs, TextSm, Span, Heading, HeadingXs, HeadingMd, SvgWrap, ButtonHover } from '../components/ui';

class CvPage extends Component {
    /**
     * Renders the intro text.
     *
     * @return {ReactNode}
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
            <Box
                mb={ 5 }
                className="cv-section"
            >
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
     * @return {ReactNode}
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
            <Box
                mb={ 5 }
                className="cv-section"
            >
                { me_skills_title &&
                    <HeadingDecorated
                        className="cv-section__heading"
                    >
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
     * Renders the employments list.
     *
     * @return {ReactNode}
     */
    renderEmployments() {
        const {
            data,
        } = this.props;

        const globalContent = data.global.edges[0].node.data;

        const {
            me_employment_title,
            me_employments,
        } = globalContent;

        if (!me_employments && !me_employment_title) {
            return null;
        }

        const renderEmployments = me_employments.map((element, index) => {
            const employmentDate = element.me_employment_date;
            const employmentTitle = element.me_employment_title;
            const employmentDesc = element.me_employment_description;

            return (
                <Box key={ index } mb={ 4 }>
                    { employmentDate && <HeadingXs caps color="light" mb={ 1 }>{ employmentDate.text }</HeadingXs> }
                    { employmentTitle && <HeadingMd mb={ 0 }>{ employmentTitle.text }</HeadingMd> }
                    { employmentDesc &&
                        <TextWrapSm
                            textSpacing
                            mb={ 0 }
                        >
                            <div
                                dangerouslySetInnerHTML={
                                    {
                                        __html: employmentDesc.html,
                                    }
                                }
                            />
                        </TextWrapSm>
                    }
                </Box>
            );
        });

        return (
            <Box mb={ 5 } className="cv-section">
                { me_employment_title && <HeadingDecorated className="cv-section__heading">{ me_employment_title.text }</HeadingDecorated> }
                { renderEmployments }
            </Box>
        );
    }

    /**
     * Renders the educations list.
     *
     * @return {ReactNode}
     */
    renderEducations() {
        const {
            data,
        } = this.props;

        const globalContent = data.global.edges[0].node.data;

        const {
            me_education_title,
            me_educations,
        } = globalContent;

        if (!me_educations && !me_education_title) {
            return null;
        }

        const renderEducations = me_educations.map((element, index) => {
            const educationDate = element.me_education_date;
            const educationTitle = element.me_education_title1;
            const educationDesc = element.me_education_description;

            return (
                <Box key={ index } mb={ 4 }>
                    { educationDate && <HeadingXs caps color="light" mb={ 1 }>{ educationDate.text }</HeadingXs> }
                    { educationDate && <HeadingMd mb={ 0 }>{ educationTitle.text }</HeadingMd> }
                    { educationDesc &&
                        <TextWrapSm textSpacing mb={ 0 }>
                            <div
                                dangerouslySetInnerHTML={
                                    {
                                        __html: educationDesc.html,
                                    }
                                }
                            />
                        </TextWrapSm>
                    }
                </Box>
            );
        });

        return (
            <Box mb={ 5 } className="cv-section">
                { me_education_title && <HeadingDecorated className="cv-section__heading">{ me_education_title.text }</HeadingDecorated> }
                { renderEducations }
            </Box>
        );
    }

    /**
     * Renders the interests text.
     *
     * @return {ReactNode}
     */
    renderInterests() {
        const {
            data,
        } = this.props;

        const globalContent = data.global.edges[0].node.data;

        const {
            me_interests_title,
            me_interests_text,
        } = globalContent;

        if (!me_interests_title && !me_interests_text) {
            return null;
        }

        return (
            <Box mb={ 5 } className="cv-section">
                { me_interests_title && <HeadingDecorated className="cv-section__heading">{ me_interests_title.text }</HeadingDecorated> }
                <TextWrapSm
                    textSpacing
                >
                    <div
                        dangerouslySetInnerHTML={
                            {
                                __html: me_interests_text.html,
                            }
                        }
                    />
                </TextWrapSm>
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
     * @return {ReactNode}
     */
    render() {
        const {
            data,
        } = this.props;

        const globalContent = data.global.edges[0].node.data;

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
                                    { globalContent.first_name.text }&nbsp;
                                </Box>
                                <span>{ globalContent.surname.text }</span>
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

CvPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(CvPage));

export const pageQuery = graphql`
    query CvQuery {
        global: allPrismicGlobal(sort: { fields: [last_publication_date], order: DESC }) {
            edges {
                node {
                    uid
                    data {
                        first_name {
                            text
                        }
                        surname {
                            text
                        }
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
                        me_employment_title {
                            text
                        }
                        me_education_title {
                            text
                        }
                        me_employments {
                            me_employment_date {
                                text
                            }
                            me_employment_title {
                                text
                            }
                            me_employment_description {
                                html
                            }
                        }
                        me_educations {
                            me_education_date {
                                text
                            }
                            me_education_title1 {
                                text
                            }
                            me_education_description {
                                html
                            }
                        }
                        me_interests_title {
                            text
                        }
                        me_interests_text {
                            html
                        }
                    }
                }
            }
        }
    }
`;
