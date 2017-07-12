import React from 'react';
import {connect} from 'react-redux';
// Components 
import InputArea from './InputArea';
import ProductArea from './ProductArea';
import PropTypes from 'prop-types';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Vending Machine</h1>
                <InputArea />
                <ProductArea />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.stock,
        inputs: {
            credit: state.credit,
            changeArea: state.changeArea,
            float: state.float,
            displayMessage: state.displayMessage,
            selection: state.selection
        },
        productDispenser: {
            productDispenser: state.productDispenser,
            dispenserDoor: state.dispenserDoorOpen
        }
    };
}


export default connect( mapStateToProps)(App);

App.propTypes = {
    products: PropTypes.object.isRequired,
    inputs: PropTypes.object.isRequired,
    productDispenser: PropTypes.object.isRequired
};