import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Planes() {
  const planes = [
    {
      nombre: "Plan Básico",
      precio: "$29",
      periodo: "/mes",
      descripcion: "Perfecto para comenzar tu transformación",
      caracteristicas: [
        "Plan nutricional personalizado",
        "Rutinas de ejercicio básicas",
        "Seguimiento semanal",
        "Acceso a recetas saludables",
        "Soporte por email",
      ],
      destacado: false,
    },
    {
      nombre: "Plan Intermedio",
      precio: "$59",
      periodo: "/mes",
      descripcion: "La opción más popular para resultados óptimos",
      caracteristicas: [
        "Todo lo del Plan Básico",
        "Consultas mensuales con nutricionista",
        "Rutinas de ejercicio avanzadas",
        "Seguimiento diario",
        "App móvil premium",
        "Soporte prioritario 24/7",
      ],
      destacado: true,
    },
    {
      nombre: "Plan Rígido",
      precio: "$99",
      periodo: "/mes",
      descripcion: "Máximo nivel de personalización y soporte",
      caracteristicas: [
        "Todo lo del Plan Premium",
        "Entrenador personal asignado",
        "Consultas semanales",
        "Plan de suplementación",
        "Análisis corporal mensual",
        "Acceso a eventos exclusivos",
      ],
      destacado: false,
    },
  ]

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 fw-bold text-primary-custom mb-3">Elige tu Plan Ideal</h1>
            <p className="lead text-muted">
              Selecciona el plan que mejor se adapte a tus objetivos y presupuesto. Todos incluyen garantía de
              satisfacción de 30 días.
            </p>
          </div>
        </div>

        <div className="row g-4 justify-content-center">
          {planes.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className={`card plan-card h-100 ${plan.destacado ? "featured" : ""}`}>
                <div className="card-body p-4 text-center">
                  <h3 className="card-title text-primary-custom mb-3">{plan.nombre}</h3>
                  <div className="mb-3">
                    <span className="display-4 fw-bold text-primary-custom">{plan.precio}</span>
                    <span className="text-muted">{plan.periodo}</span>
                  </div>
                  <p className="text-muted mb-4">{plan.descripcion}</p>

                  <ul className="list-unstyled text-start mb-4">
                    {plan.caracteristicas.map((caracteristica, idx) => (
                      <li key={idx} className="mb-2">
                        <i className="bi bi-check-circle-fill text-secondary-custom me-2"></i>
                        {caracteristica}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-footer bg-transparent border-0 p-4 pt-0">
                  <Link
                    to="/registro"
                    onClick={() => localStorage.setItem("planSeleccionado", plan.nombre)}
                    className={`btn w-100 ${plan.destacado ? "btn-primary-custom" : "btn-outline-primary"}`}
                  >
                    {plan.destacado ? "Comenzar Ahora" : "Seleccionar Plan"}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}
