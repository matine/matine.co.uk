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
            <div className="container text-centre">
                <h2>This is the About page</h2>
                { RichText.render(globalContent.site_title) }
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
