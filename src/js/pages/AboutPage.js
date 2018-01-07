import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RichText } from 'prismic-reactjs';

class AboutPage extends Component {
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
            <div className="container">
                <div className="text-centre">
                    <img
                        src={ globalContent.about_me_image.url }
                        alt={ globalContent.about_me_image.alt }
                        className="width-100 max-width-xxl"
                    />
                </div>
                <div className="max-width-text-narrow m-centre p-t-lg p-b-xxl">
                    { RichText.render(globalContent.about_me_text) }
                </div>
            </div>
        );
    }
}

AboutPage.propTypes = {
    content: PropTypes.shape(),
};

AboutPage.defaultProps = {
    content: null,
};

const mapStateToProps = state => ({
    content: state.content,
});

export default connect(mapStateToProps)(AboutPage);
