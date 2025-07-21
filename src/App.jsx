import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IniciarPrograma from "./pages/IniciarPrograma";
import Planes from "./pages/Planes";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Panel from "./pages/Panel";
import Contacto from "./pages/Contacto";
import TestBootstrap from "./pages/TestBootstrap";

import VistaPlan from "./pages/VistaPlan" 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/planes" element={<Planes />} />
          <Route path="/iniciar-programa" element={<IniciarPrograma />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/panel"   element={<Panel />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/test" element={<TestBootstrap />} />
          
          <Route path="/planes/:nombrePlan" element={<VistaPlan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
