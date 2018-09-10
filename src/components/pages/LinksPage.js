import React from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import { Container, TextXs, TextWrapXs, HeadingDecorated, Heading, Span, Col, Grid, List } from '../ui';

class LinksPage extends Page {
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
     * Render all the lists of links with titles
     *
     * @return {XML}
     */
    renderListOfLinks() {
        const globalContent = this.props.content.global;

        const sliceContent = globalContent.body.map((slice, sliceIndex) => {
            // Get the title for the list
            const listOfLinksTitle = slice.primary.list_of_links_title[0].text;

            // Render the list of links
            if (slice.slice_type === 'links') {
                const linkContent = slice.items.map((link, linkIndex) => {
                    return (
                        <li key={ linkIndex }>
                            <TextXs caps mb={ 1 } fontWeight="bold" linkStyle="hover">
                                <a href={ link.link_url.url } target="blank">{ link.link_name } →</a>
                            </TextXs>
                            <TextWrapXs>{ RichText.render(link.link_description) }</TextWrapXs>
                        </li>
                    );
                });

                return (
                    <Col key={ sliceIndex } width={[ 1, 1, 1/2, 1/4 ]}>
                        <HeadingDecorated size={ 4 }>{ listOfLinksTitle }</HeadingDecorated>
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
     * @return {XML}
     */
    render() {
        const globalContent = this.props.content.global;

        if (!globalContent) {
            return null;
        }

        return (
            <Container id="links-page" pb={ 5 }>
                <Heading caps py={ 6 } fontWeight="bold" size={ 5 } textAlign="center">
                    { globalContent.links_title[0].text }
                    <br/>
                    <Span fontWeight="regular">{ globalContent.links_subtitle[0].text }</Span>
                </Heading>
                <Grid>
                    { this.renderListOfLinks() }
                </Grid>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksPage);

