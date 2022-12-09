'use strict'

import './style/reset.css'
import './style/index.css'

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, BrowserRouter } from "react-router-dom";
import { ScrollToTop } from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <ScrollToTop />
    <App />
  </HashRouter>
);
