import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';

class LinksPage extends Component {
    /**
     * Render all the lists of links with titles
     *
     * @return {XML}
     */
    renderListOfLinks() {
        const sliceContent = this.props.globalContent.body.map((slice, sliceIndex) => {
            // Get the title for the list
            const listOfLinksTitle = RichText.render(slice.primary.list_of_links_title);

            // Render the list of links
            if (slice.slice_type === 'links') {
                const linkContent = slice.items.map((link, linkIndex) => {
                    return (
                        <li key={ linkIndex }>
                            <a href={ link.link_url.url } target="blank">{ link.link_name }</a>
                            <div>{ RichText.render(link.link_description) }</div>
                        </li>
                    );
                });

                return (
                    <div key={ sliceIndex }>
                        { listOfLinksTitle }
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
        if (!this.props.globalContent) {
            return null;
        }

        return (
            <div className="container text-centre">
                { this.renderListOfLinks() }
            </div>
        );
    }
}

LinksPage.propTypes = {
    globalContent: PropTypes.shape().isRequired,
};

export default LinksPage;
