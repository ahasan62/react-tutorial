import React from 'react';
import ReactDOM from 'react-dom/client'
import searchImages from './api.js';
import App from './App.js'
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

searchImages();




root.render(<App></App>);