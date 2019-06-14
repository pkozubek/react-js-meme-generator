import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import reducer from './store/reducer/reducer';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk)
));

const app = <Provider store = {store}><BrowserRouter  basename={process.env.PUBLIC_URL}><App/></BrowserRouter></Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
