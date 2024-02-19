import React from 'react';
import ReactDOM from 'react-dom/client'; // 변경된 임포트
import App from './App';
import './index.css'; // Tailwind CSS 임포트


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
