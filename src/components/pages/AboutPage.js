import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';
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
                <div className="text-centre">
                    <img
                        src={ globalContent.about_me_image.url }
                        alt={ globalContent.about_me_image.alt }
                        className="width-100 max-width-xxl"
                        onLoad={ this.handleImageLoaded }
                    />
                </div>
                <div className="max-width-text-narrow m-centre p-t-lg p-b-xxl">
                    { RichText.render(globalContent.about_me_text) }
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
