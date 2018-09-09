import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoadingIcon, Fixed, SvgWrap } from '../ui';
import { CSSTransitionGroup } from 'react-transition-group';

class Loading extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    renderLoading() {
        return (
            <Fixed
                key="one" 
                width={ 1 }
                position="fixed"
                zIndex={ 999 }
                display="flex"
                alignItems="center"
                justifyContent="center"
                bg="gray.0"
            >
                <SvgWrap width={ 100 } color="primary">
                    <LoadingIcon />
                </SvgWrap>
            </Fixed>
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
