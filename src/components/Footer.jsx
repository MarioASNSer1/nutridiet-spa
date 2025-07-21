import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-5 mt-5 bg-dark text-light">
      <div className="container">
        <div className="row">
          {/* Descripción */}
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3">
              <i className="bi bi-heart-pulse me-2" aria-hidden="true"></i>
              NutriDiet
            </h5>
            <p>
              Tu compañero ideal en el camino hacia una vida más saludable. Planes personalizados de nutrición y
              ejercicio para alcanzar tus objetivos.
            </p>
          </div>

          {/* Navegación */}
          <div className="col-lg-2 col-md-6 mb-4">
            <h6 className="mb-3">Navegación</h6>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-light text-decoration-none">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/iniciar-programa" className="text-light text-decoration-none">
                  Iniciar Programa
                </Link>
              </li>
              <li>
                <Link to="/planes" className="text-light text-decoration-none">
                  Planes
                </Link>
              </li>
              <li>
                <Link to="/panel" className="text-light text-decoration-none">
                  Panel
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-light text-decoration-none">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-lg-3 mb-4">
            <h6 className="mb-3">Contacto</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-envelope me-2" aria-hidden="true"></i>
                info@nutridiet.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2" aria-hidden="true"></i>
                +1 (555) 123-4567
              </li>
              <li>
                <i className="bi bi-geo-alt me-2" aria-hidden="true"></i>
                Calle Antofagasta #123
              </li>
            </ul>
          </div>
        </div>

        <hr className="my-4" />

        {/* Footer inferior */}
        <div className="row align-items-center">
          <div className="col-md-6">
            <p className="mb-0">© 2025 NutriDiet. Todos los derechos reservados.</p>
          </div>
          <div className="col-md-6 text-md-end">
            <a href="#" className="text-light text-decoration-none me-3">
              Política de Privacidad
            </a>
            <a href="#" className="text-light text-decoration-none">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
