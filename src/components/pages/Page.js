import { Component } from 'react';
import { connect } from 'react-redux';
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
    }

    /**
     * Things to do when the component recieves props.
     *
     * @return {void}
     */
    componentWillReceiveProps(props) {
        if (props.match.url !== this.props.match.url) {
            window.scroll(0, 0);
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
