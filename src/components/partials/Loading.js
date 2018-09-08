import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoadingIcon } from '../ui';
import { CSSTransitionGroup } from 'react-transition-group';

class Loading extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    renderLoading() {
        return (
            <div key="one" className="width-100 height-100 pos-fix pin-top-left b-b-none bg-dark-grey z-index-999 align-content-centre">
                <div className="max-width-xxs icon-colour-primary">
                    <LoadingIcon colour="#59edd6" />
                </div>
            </div>
        )
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const {
            isLoading,
            imgsLoading,
        } = this.props;

        return (
            <CSSTransitionGroup
                transitionName="item"
                transitionEnter={ false }
                transitionLeaveTimeout={ 1000 }
            >
                { !isLoading && !imgsLoading ? null : this.renderLoading() }
            </CSSTransitionGroup>
        )
    }
}

Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    imgsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isLoading: state.ui.isLoading,
    imgsLoading: state.ui.imgsLoading,
});

export default connect(mapStateToProps)(Loading);
