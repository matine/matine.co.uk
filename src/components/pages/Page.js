import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RichText } from 'prismic-reactjs';
import * as actions from '../../state/actions';

export class Page extends Component {
    /**
     * Component constructor.
     *
     * @param {Object} props
     */
    constructor(props) {
        super(props);

        window.scroll(0, 0);
        props.setTheme('default');
        props.setImgsLoading(true);
    }

    /**
     * Things to do when the component recieves props.
     *
     * @return {void}
     */
    componentWillReceiveProps(props) {
        if (props.match.url !== this.props.match.url) {
            window.scroll(0, 0);
            this.props.setImgsLoading(true);
        }
    }

    /**
     * Renders the component.
     *
     * @param {JSX|null} jsx
     * @return {JSX}
     */
    render(jsx = null) {
        return jsx;
    }
}

export const mapStateToProps = state => ({
    content: state.content,
    ui: state.ui,
    theme: state.theme,
});

export const mapDispatchToProps = dispatch => ({
    setTheme: theme => dispatch(actions.setTheme(theme)),
    setImgsLoading: imgsLoading => dispatch(actions.setImgsLoading(imgsLoading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
