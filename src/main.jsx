import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"

// importar bootsprap css y js
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

// estilos personalizados 
import "./index.css"

// bootstrap js
import "bootstrap/dist/js/bootstrap.bundle.min.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
