import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Footer extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const {
            globalContent,
        } = this.props;

        return (
            <footer className="width-100 pos-fix pin-bottom-left z-index-0">
                <div className="container text-centre">
                    <h2 className="colour-light">This is my footer</h2>
                </div>
            </footer>
        );
    }
}

Footer.propTypes = {
    globalContent: PropTypes.shape(),
};

Footer.defaultProps = {
    globalContent: null,
};

const mapStateToProps = state => ({
    globalContent: state.content.global,
});

export default connect(mapStateToProps)(Footer);
