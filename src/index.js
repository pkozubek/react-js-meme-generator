import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import MainComponent from './components/main';



//ReactDOM.render(<reactButton/>, document.getElementById('app'));
ReactDOM.render(<MainComponent/>, document.getElementById('app'));
registerServiceWorker();
