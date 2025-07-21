import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png"; // Ajusta el path segun tu estructura  

export default function Header() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        {/* Logo y nombre */}
        <Link to="/" className="navbar-brand d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="Logo NutriZen"
            width={50}
            height={50}
            style={{ objectFit: "contain", borderRadius: "6px" }}
          />
          <span className="fw-bold text-primary-custom" style={{ fontSize: "1.25rem" }}>
            NutriDiet
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link${isActive("/") ? " active text-primary-custom fw-bold" : ""}`}>
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/iniciar-programa"
                className={`nav-link${isActive("/iniciar-programa") ? " active text-primary-custom fw-bold" : ""}`}
              >
                Plan Personalizado
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/planes"
                className={`nav-link${isActive("/planes") ? " active text-primary-custom fw-bold" : ""}`}
              >
                Planes
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/panel"
                className={`nav-link${isActive("/panel") ? " active text-primary-custom fw-bold" : ""}`}
              >
                Panel
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contacto"
                className={`nav-link${isActive("/contacto") ? " active text-primary-custom fw-bold" : ""}`}
              >
                Contacto
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                <i className="bi bi-box-arrow-in-right me-1"></i>
                Iniciar Sesión
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/registro" className="btn btn-primary-custom ms-2">
                Registrarse
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

