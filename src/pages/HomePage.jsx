import { Link } from "react-router-dom"; 
import Header from "../components/Header";
import Footer from "../components/Footer";

import banner1 from "../assets/banner1.png";

const testimonios = [
  {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Gracias a NutriDiet he logrado cambiar mis hábitos y perder 15 kg en 6 meses.",
  },
  {
    img: "https://randomuser.me/api/portraits/men/44.jpg",
    text: "Las rutinas personalizadas y el seguimiento me han motivado muchísimo.",
  },
  {
    img: "https://randomuser.me/api/portraits/women/12.jpg",
    text: "La atención profesional y el plan nutricional han sido clave en mi transformación.",
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="hero-section bg-primary-custom text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4 text-green-custom">
                Transforma tu vida con NutriDiet
              </h1>
              <p className="lead mb-4 text-green-custom">
                Descubre el poder de una alimentación balanceada y ejercicio personalizado. Nuestros planes están
                diseñados específicamente para ayudarte a alcanzar tus objetivos de pérdida de peso de manera saludable
                y sostenible.
              </p>
              <div className="d-flex gap-3 flex-wrap">
                <Link to="/iniciar-programa" className="btn btn-light btn-lg px-4">
                  <i className="bi bi-play-circle me-2"></i>
                  Comenzar Ahora
                </Link>
                <Link to="/planes" className="btn btn-outline-light btn-lg px-4">
                  <i className="bi bi-info-circle me-2"></i>
                  Ver Planes
                </Link>
              </div>
            </div>
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <img
                src={banner1}
                alt="Persona saludable"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-lg-8 mx-auto">
              <h2 className="display-5 fw-bold text-green-custom mb-3">
                ¿Por qué elegir NutriDiet?
              </h2>
              <p className="lead text-green-custom">
                Ofrecemos un enfoque integral para tu bienestar, combinando nutrición, ejercicio y seguimiento
                personalizado.
              </p>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card feature-card h-100 text-center p-4">
                <div className="card-body">
                  <div
                    className="bg-secondary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-heart-pulse fs-2 text-green-custom"></i>
                  </div>
                  <h4 className="card-title text-green-custom">Planes Personalizados</h4>
                  <p className="card-text text-green-custom">
                    Cada plan se adapta a tus necesidades específicas, objetivos y estilo de vida.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card feature-card h-100 text-center p-4">
                <div className="card-body">
                  <div
                    className="bg-secondary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-graph-up-arrow fs-2 text-green-custom"></i>
                  </div>
                  <h4 className="card-title text-green-custom">Seguimiento en Tiempo Real</h4>
                  <p className="card-text text-green-custom">
                    Monitorea tu progreso con herramientas avanzadas y ajustes automáticos.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card feature-card h-100 text-center p-4">
                <div className="card-body">
                  <div
                    className="bg-secondary-custom rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <i className="bi bi-people fs-2 text-green-custom"></i>
                  </div>
                  <h4 className="card-title text-green-custom">Apoyo Profesional</h4>
                  <p className="card-text text-green-custom">
                    Cuenta con el respaldo de nutricionistas y entrenadores certificados.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 fw-bold text-green-custom">10,000+</div>
              <p className="text-green-custom">Usuarios Activos</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 fw-bold text-green-custom">95%</div>
              <p className="text-green-custom">Tasa de Éxito</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 fw-bold text-green-custom">500+</div>
              <p className="text-green-custom">Recetas Saludables</p>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <div className="h2 fw-bold text-green-custom">24/7</div>
              <p className="text-green-custom">Soporte Disponible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
     <section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <h2 className="display-5 fw-bold text-green-custom mb-4">
          Historias de Éxito
        </h2>

        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonios.map(({ img, text }, idx) => (
              <div
                key={idx}
                className={`carousel-item text-center ${idx === 0 ? "active" : ""}`}
              >
                <img
                  src={img}
                  className="rounded-circle mb-4 mx-auto"
                  alt={`Testimonio ${idx + 1}`}
                  style={{
                    width: "160px",
                    height: "160px",
                    objectFit: "cover",
                    border: "4px solid #799F38",
                  }}
                />
                <p
                  className="text-green-custom"
                  style={{ maxWidth: "600px", margin: "0 auto" }}
                >
                  <em>"{text}"</em>
                </p>
              </div>
            ))}
          </div>

          {/* Controles del carrusel */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* CTA */}
<section className="py-5 bg-light">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <h2 className="display-5 fw-bold text-green-custom mb-3">
          ¿Listo para comenzar tu transformación?
        </h2>
        <p className="lead text-green-custom mb-4">
          Únete a miles de personas que ya han logrado sus objetivos con NutriDiet.
        </p>
        <Link
          to="/registro"
          className="btn btn-primary-custom btn-lg px-5"
        >
          <i className="bi bi-rocket-takeoff me-2"></i>
          Comenzar Gratis
        </Link>
      </div>
    </div>
  </div>
</section>


    {/* PREGUNTAS FRECUENTES */}
<section className="py-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 mx-auto text-center">
        <h2 className="display-5 fw-bold text-green-custom mb-4">
          Preguntas Frecuentes
        </h2>
        <div className="accordion" id="faqAccordion">
          {[
            {
              q: "¿Necesito experiencia previa para comenzar?",
              a: "No. Nuestros planes están diseñados para todos los niveles, incluyendo principiantes.",
            },
            {
              q: "¿Puedo cambiar de plan después de empezar?",
              a: "Sí. Puedes actualizar o cambiar de plan en cualquier momento desde tu panel.",
            },
            {
              q: "¿Los planes incluyen asesoría profesional?",
              a: "Sí. Tendrás acceso a recomendaciones personalizadas creadas por expertos.",
            },
          ].map((item, idx) => (
            <div className="accordion-item" key={idx}>
              <h2 className="accordion-header" id={`heading${idx}`}>
                <button
                  className="accordion-button collapsed text-green-custom"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${idx}`}
                  aria-expanded="false"
                  aria-controls={`collapse${idx}`}
                >
                  {item.q}
                </button>
              </h2>
              <div
                id={`collapse${idx}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${idx}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body text-green-custom">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      <Footer />
    </>
  );
}
