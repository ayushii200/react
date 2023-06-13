import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
//import Props from './Props';
//import Main from './Main';
//import Todo from './Todo';
import Counter from './Counter.js';
import reportWebVitals from './reportWebVitals';
import Stopwatch from './Stopwatch';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Counter/>
   <Stopwatch/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
