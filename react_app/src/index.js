import React from 'react';
import ReactDOM from 'react-dom/client';
import './navbar.css';
import 'tippy.js/dist/tippy.css';
import './index.css'
import App from './App';
import {MetubeProvider} from './context/MetubeContext';
import './components/video_component/video.css'
import './components/details/details.css'
import './components/Secondary/secondary.css'
import './comments.css'
import './components/HomePage/home.css'
import "./components/Homevideos/Homevideos.css"
import './theme.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetubeProvider>
    <App />
    </MetubeProvider>
  </React.StrictMode>
);

