import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Router, browserHistory } from 'react-router';
import App from './App';
import routes from './routes';
require('./templates/home_style.css');
//import Welcome from './homepage'


ReactDOM.render(<App />, document.getElementById('root')); //arguments, 1> what you want to render, where do you want to rednder it


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
