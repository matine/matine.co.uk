import React from 'react';
import { connect } from 'react-redux';
import { Page, mapStateToProps, mapDispatchToProps } from './Page';

class PlacesPage extends Page {
    /**
     * Things to do when the component recieves props.
     *
     * @return {void}
     */
    componentWillReceiveProps(props) {
        super.componentWillReceiveProps(props);

        setTimeout(() => {
            this.props.setImgsLoading(false);
        }, 1);
    }

    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        return (
            <div>
                <iframe title="my-favourite-places" src="https://www.google.com/maps/d/embed?mid=14a0taK4PkYEmIdLV-p35GRANUgJpoASd&hl=en" width="640" height="600" className="width-100"></iframe>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesPage);
