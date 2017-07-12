import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from '../reducers/reducer';

const store = createStore(reducer);

// Components
import App from './components/App';

render (
    <Provider store={store}>
        <App/>
    </Provider>    
        , document.querySelector('#root')
);
