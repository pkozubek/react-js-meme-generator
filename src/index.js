import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import reducer from './store/reducer/reducer';
import {createStore} from 'redux';

const store = createStore(reducer);

const app = <Provider store = {store}><BrowserRouter  basename={process.env.PUBLIC_URL}><App/></BrowserRouter></Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
