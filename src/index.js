import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store/store';
import {App} from './components/app';
import {Provider} from 'react-redux';


// render the main component

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('root')
);