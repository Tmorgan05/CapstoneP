import React from 'react'
import ReactDOM from "react-dom/client";
import App from './components/App.jsx'

// place css in the src/style directory, and import them like this:
import './style/index.css'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);