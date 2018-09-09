import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { LoadingIcon, Box } from '../ui';
import { CSSTransitionGroup } from 'react-transition-group';

class Loading extends Component {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    renderLoading() {
        return (
            <Box
                key="one" 
                width={ 1 }
                position="fixed"
                top={ 0 }
                left={ 0 }
                right={ 0 }
                bottom={ 0 }
                zIndex={ 999 }
                display="flex"
                alignItems="center"
                justifyContent="center"
                className="bg-dark-grey"
            >
                <div className="max-width-xxs icon-colour-primary">
                    <LoadingIcon colour="#59edd6" />
                </div>
            </Box>
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
