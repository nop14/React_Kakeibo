import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Frame from './Frame'
import reportWebVitals from './reportWebVitals';

// DB操作(controller)に関する部分
const table_data = [];

// レンダリング(view)に関する部分
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Frame />
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
