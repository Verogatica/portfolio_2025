import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import UnderConstruction from './pages/UnderConstruction.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <UnderConstruction></UnderConstruction>
  </React.StrictMode>,
)
