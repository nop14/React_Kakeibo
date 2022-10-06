import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Table from './Table/Table'
import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const graph1 = ReactDOM.createRoot(document.getElementById("graph1"));
const graph2 = ReactDOM.createRoot(document.getElementById("graph2"));
const table = ReactDOM.createRoot(document.getElementById("table"));
table.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
