import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Parse from "parse";

Parse.initialize(
  "AgzfzDrOFClmY4jztxiZnNa3dlEN8fbiDAsWV6lf",
  "SsjNuDrQGMddrkRrL3vV5tYUYhZQf7RrTTwHHngB"
);

Parse.serverURL = "https://parseapi.back4app.com/";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
