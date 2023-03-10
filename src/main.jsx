import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import './index.css';
import NavBar from './componentes/Navbar';
import itemListContainer from './componentes/ItemListContainer';
import CardWidget from './componentes/CardWidget';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)