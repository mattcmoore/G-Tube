import React from 'react';
import ReactDOM from 'react-dom/client';
import './navbar.css';
import 'tippy.js/dist/tippy.css';
import './index.css'
import App from './App';
import {MetubeProvider} from './context/MetubeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetubeProvider>
    <App />
    </MetubeProvider>
  </React.StrictMode>
);

