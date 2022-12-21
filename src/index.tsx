import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const rootNode = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(
  rootNode
);
root.render(
  <React.StrictMode>
    <App html={rootNode.innerHTML} />
  </React.StrictMode>
);
