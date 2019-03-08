{/*eslint-disable*/}
import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/main.scss';
import "highlight.js/styles/github.css";
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
