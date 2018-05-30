import React from 'react';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';

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
                            <p className="p-b-xxs"><a href={ link.link_url.url } target="blank" className="remove-link-style font-weight-bold">{ link.link_name }</a></p>
                            <div className="font-size-xs">{ RichText.render(link.link_description) }</div>
                        </li>
                    );
                });

                return (
                    <div key={ sliceIndex } className="grid__col grid__col-sm-6 grid__col-md-3 text-left">
                        <h3 className="title-with-decoration font-uppercase font-size-lg font-weight-regular p-b-xxs m-b-lg">{ listOfLinksTitle }</h3>
                        <ul className="list--no-styles">
                            { linkContent }
                        </ul>
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
            <div id="links-page" className="container text-centre p-b-xxl">
                <h1 className="font-uppercase p-v-xxl m-v-xxl">{ globalContent.links_title[0].text }</h1>
                <div className="grid">
                    { this.renderListOfLinks() }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinksPage);

