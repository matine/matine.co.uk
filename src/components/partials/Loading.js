import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LoadingIcon } from '../ui';
import { CSSTransitionGroup } from 'react-transition-group';

class Loading extends Component {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
        }
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isLoading: newProps.isLoading,
        });
    }

    renderLoadingContent() {
        const {
            isLoading,
        } = this.state;

        if (!isLoading) {
            return null;
        }

        return (
            <div key="one" className="width-100 height-100 pos-fix pin-top-left b-a-frame b-b-none bg-texture z-index-10 align-content-centre">
                <div className="max-width-xxs">
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
        return (
            <CSSTransitionGroup
                transitionName="item"
                transitionEnter={false}
                transitionLeaveTimeout={700}
            >
                { this.renderLoadingContent() }
            </CSSTransitionGroup>
        );
    }
}

Loading.propTypes = {
    isLoading: PropTypes.bool,
};

Loading.defaultProps = {
    isLoading: false,
};

export default Loading;
