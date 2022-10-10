import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Table from './Table/Table'
import Graph from './Graph/Graph'
import reportWebVitals from './reportWebVitals';

// DB操作(controller)に関する部分

// レンダリング(view)に関する部分
const graph1 = ReactDOM.createRoot(document.getElementById("graph1"));
const graph2 = ReactDOM.createRoot(document.getElementById("graph2"));
const table = ReactDOM.createRoot(document.getElementById("table"));
table.render(
  <React.StrictMode>
    <Table />
  </React.StrictMode>
)
graph1.render(
  <React.StrictMode>
    <Graph id="1" />
  </React.StrictMode>
)
graph2.render(
  <React.StrictMode>
    <Graph id="2" />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
