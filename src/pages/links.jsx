import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { connect } from 'react-redux';
import withLayout from '../components/hoc/withLayout';
import * as actions from '../state/actions';
import { Container, TextXs, TextWrapXs, HeadingDecorated, PageHeading, Span, Col, Grid, List } from '../components/ui';

class LinksPage extends Component {
    /**
     * Render all the lists of links with titles
     *
     * @return {XML}
     */
    renderListOfLinks() {
        const {
            data,
        } = this.props;

        const globalContent = data.global.edges[0].node.data;

        const sliceContent = globalContent.body.map((slice, sliceIndex) => {
            // Get the title for the list
            const listOfLinksTitle = slice.primary.list_of_links_title.text;

            // Render the list of links
            if (slice.slice_type === 'links') {
                const linkContent = slice.items.map((link, linkIndex) => {
                    return (
                        <li key={ linkIndex }>
                            <TextXs caps mb={ 1 } fontWeight="bold" linkStyle="hover">
                                <a href={ link.link_url.url } target="blank">{ link.link_name } →</a>
                            </TextXs>
                            <TextWrapXs>
                                <div
                                    dangerouslySetInnerHTML={
                                        {
                                            __html: link.link_description.html,
                                        }
                                    }
                                />
                            </TextWrapXs>
                        </li>
                    );
                });

                return (
                    <Col key={ sliceIndex } width={[ 1, 1, 1/2, 1/4 ]}>
                        <HeadingDecorated>{ listOfLinksTitle }</HeadingDecorated>
                        <List listStyle="bordered">
                            { linkContent }
                        </List>
                    </Col>
                );

            // Return null by default
            } else {
                return null;
            }
        });

        return sliceContent;
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
            <Container id="links-page" pb={ 5 }>
                <PageHeading>
                    { globalContent.links_title.text }
                    <br/>
                    <Span fontWeight="regular">{ globalContent.links_subtitle.text }</Span>
                </PageHeading>
                <Grid>
                    { this.renderListOfLinks() }
                </Grid>
            </Container>
        );
    }
}

LinksPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(withLayout(LinksPage));

export const pageQuery = graphql`
    query LinksQuery {
        global: allPrismicGlobal(sort: { fields: [last_publication_date], order: DESC }) {
            edges {
                node {
                    uid
                    data {
                        links_title {
                            text
                        }
                        links_subtitle {
                            text
                        }
                        body {
                            items {
                                link_name
                                link_url {
                                    url
                                }
                                link_description {
                                    html
                                }
                            }
                            slice_type
                            primary {
                                list_of_links_title {
                                    text
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
