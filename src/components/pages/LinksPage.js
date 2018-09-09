import React from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';
import { Container, Box, Text, TextWrap, HeadingDecorated, Heading, Span } from '../ui';

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
                        <li key={ linkIndex } className="b-b-thin m-b-sm p-b-sm">
                            <Text size={ 1 } caps pb={ 1 }>
                                <a href={ link.link_url.url } target="blank" className="remove-link-style font-weight-bold">{ link.link_name } →</a>
                            </Text>
                            <TextWrap size={ 1 }>{ RichText.render(link.link_description) }</TextWrap>
                        </li>
                    );
                });

                return (
                    <div key={ sliceIndex } className="grid__col grid__col-sm-6 grid__col-md-3 text-left">
                        <HeadingDecorated size={ 4 }>{ listOfLinksTitle }</HeadingDecorated>
                        <TextWrap listStyle="none">
                            <ul>
                                { linkContent }
                            </ul>
                        </TextWrap>
                    </div>
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
                <div className="grid">
                    { this.renderListOfLinks() }
                </div>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksPage);

