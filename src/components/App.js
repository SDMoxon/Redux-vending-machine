import React from 'react';

// Components 
import InputArea from './InputArea';
import ProductArea from './ProductArea';

class App extends React.Component {
    render () {
        return (
            <div className="container">
                <h1>Vending Machine</h1>
                <InputArea/>
                <ProductArea/>
            </div>
        );
    }
}

export default App;