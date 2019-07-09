// @ts-check
import React from 'react';
import App from './App';
import {Provider} from "react-redux";
import {store} from './redux/store'
import {BrowserRouter} from "react-router-dom";
import * as ReactDOM from "react-dom";


ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));
