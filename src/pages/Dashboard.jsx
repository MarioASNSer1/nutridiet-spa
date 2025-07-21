"use client"

import { useState } from "react"
import Header from "../components/Header"
import perfilImg from "../assets/perfil.jpg"
import Footer from "../components/Footer"

import { ListGroup, Button, ProgressBar } from "react-bootstrap"


export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("resumen")

  const userData = {
    nombre: "María González",
    pesoActual: 68,
    pesoObjetivo: 60,
    pesoInicial: 75,
    diasEnPrograma: 45,
    caloriasObjetivo: 1800,
    caloriasConsumidas: 1350,
    aguaObjetivo: 2.5,
    aguaConsumida: 2.2,
    ejercicioObjetivo: 30,
    ejercicioRealizado: 30,
  }

  const planNutricional = [
    { comida: "Desayuno", detalle: "Avena con frutas y nueces" },
    { comida: "Almuerzo", detalle: "Pechuga de pollo con quinoa y verduras" },
    { comida: "Cena", detalle: "Sopa de verduras y ensalada" },
  ]

  const rutinaEjercicio = [
    { dia: "Lunes", actividad: "Cardio - 30 minutos" },
    { dia: "Miércoles", actividad: "Entrenamiento de fuerza - 45 minutos" },
    { dia: "Viernes", actividad: "Yoga - 30 minutos" },
  ]

  const progresoHistorial = [
    { fecha: "2025-06-01", peso: 75 },
    { fecha: "2025-06-15", peso: 72 },
    { fecha: "2025-06-30", peso: 68 },
  ]

  const perfilUsuario = {
    nombre: "María González",
    email: "maria.gonzalez@email.com",
    edad: 28,
    sexo: "Femenino",
    altura: 165,
  }

  const menuItems = [
    { id: "resumen", label: "Resumen", icon: "bi-speedometer2" },
    { id: "nutricion", label: "Nutrición", icon: "bi-apple" },
    { id: "ejercicio", label: "Ejercicio", icon: "bi-activity" },
    { id: "progreso", label: "Progreso", icon: "bi-graph-up" },
    { id: "recetas", label: "Planes", icon: "bi-book" },
    { id: "perfil", label: "Perfil", icon: "bi-person" },
  ]

  // Nuevos planes para pestaña "recetas" (ahora "Planes")
  const planes = [
    {
      nombre: "Pérdida de peso inicial",
      dieta: "Dieta baja en calorías con énfasis en proteínas y verduras.",
      ejercicio: "Rutina ligera de cardio y estiramientos 3 veces por semana.",
    },
    {
      nombre: "Pérdida de peso intermedio",
      dieta: "Dieta balanceada con control de carbohidratos y proteínas.",
      ejercicio: "Entrenamientos combinados de cardio y fuerza 4 veces por semana.",
    },
    {
      nombre: "Pérdida de peso riguroso",
      dieta: "Dieta estricta baja en carbohidratos y grasas con suplementos.",
      ejercicio: "Entrenamientos intensivos diarios con enfoque en fuerza y cardio.",
    },
  ]

  // Función para calcular dificultad/intensidad del plan
  const getDificultad = (nombre) => {
    if (nombre.toLowerCase().includes("riguroso")) return 90
    if (nombre.toLowerCase().includes("intermedio")) return 60
    if (nombre.toLowerCase().includes("inicial")) return 30
    return 50
  }

  // Estilos inline para planes
  const styles = {
    sectionTitle: { fontSize: "1.5rem", marginBottom: "1rem", color: "#0d6efd" },
    grid: { display: "flex", gap: "1rem", flexWrap: "wrap" },
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "1rem",
      flex: "1 1 300px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      backgroundColor: "white",
    },
    planTitle: { marginBottom: "0.5rem", color: "#333" },
    badge: {
      padding: "0.25rem 0.5rem",
      borderRadius: "12px",
      color: "white",
      fontWeight: "bold",
      display: "inline-block",
      marginBottom: "0.75rem",
    },
    separator: { border: "none", borderBottom: "1px solid #ccc", margin: "0.5rem 0" },
    section: { marginBottom: "1rem" },
    subTitle: { fontWeight: "bold", marginBottom: "0.25rem" },
    text: { margin: 0 },
    progressBarBackground: {
      width: "100%",
      height: "10px",
      backgroundColor: "#eee",
      borderRadius: "5px",
      overflow: "hidden",
    },
    progressBarFill: { height: "10px", borderRadius: "5px" },
    intensityText: { fontSize: "0.9rem", marginTop: "0.25rem" },
  }

  return (
    <>
      <Header />

      <div className="container-fluid">
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-2 col-md-3 dashboard-sidebar p-0">
            <div className="p-3">
              <h6 className="text-white mb-3">Dashboard</h6>
              <nav className="nav flex-column">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    className={`nav-link text-start ${activeTab === item.id ? "active" : ""}`}
                    onClick={() => setActiveTab(item.id)}
                    style={{ background: activeTab === item.id ? "#0d6efd" : "transparent", color: activeTab === item.id ? "white" : "inherit", border: "none", textAlign: "left" }}
                  >
                    <i className={`${item.icon} me-2`}></i>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="col-lg-10 col-md-9 p-4">
            {activeTab === "resumen" && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="text-primary-custom">¡Hola, {userData.nombre}! 👋</h2>
                  <div className="text-muted">
                    <i className="bi bi-calendar me-1"></i>
                    Día {userData.diasEnPrograma} de tu programa
                  </div>
                </div>

                {/* Stats Cards */}
                <div className="row g-4 mb-4">
                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-primary-custom text-white">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h6 className="card-title">Peso Actual</h6>
                            <h3 className="mb-0">{userData.pesoActual} kg</h3>
                          </div>
                          <i className="bi bi-speedometer fs-1 opacity-50"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="card bg-secondary-custom text-primary-custom">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h6 className="card-title">Progreso</h6>
                            <h3 className="mb-0">{userData.pesoInicial - userData.pesoActual} kg</h3>
                            <small>perdidos</small>
                          </div>
                          <i className="bi bi-trophy fs-1 opacity-50"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="card border-primary-custom">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h6 className="card-title text-primary-custom">Meta</h6>
                            <h3 className="mb-0 text-primary-custom">{userData.pesoObjetivo} kg</h3>
                            <small className="text-muted">objetivo</small>
                          </div>
                          <i className="bi bi-bullseye fs-1 text-primary-custom opacity-50"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-6">
                    <div className="card border-success">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div>
                            <h6 className="card-title text-success">Restante</h6>
                            <h3 className="mb-0 text-success">{userData.pesoActual - userData.pesoObjetivo} kg</h3>
                            <small className="text-muted">por perder</small>
                          </div>
                          <i className="bi bi-arrow-down fs-1 text-success opacity-50"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Objetivos */}
                <div className="row g-4">
                  <div className="col-lg-8">
                    <div className="card">
                      <div className="card-header bg-light">
                        <h5 className="mb-0 text-primary-custom">Objetivos de Hoy</h5>
                      </div>
                      <div className="card-body">
                        <div className="row g-3">
                          <div className="col-md-4">
                            <div className="text-center">
                              <div className="progress mx-auto mb-2" style={{ width: "80px", height: "80px" }}>
                                <div
                                  className="progress-bar bg-primary-custom"
                                  style={{ width: `${(userData.caloriasConsumidas / userData.caloriasObjetivo) * 100}%` }}
                                ></div>
                              </div>
                              <h6>Calorías</h6>
                              <p className="text-muted mb-0">
                                {userData.caloriasConsumidas} / {userData.caloriasObjetivo}
                              </p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center">
                              <div className="progress mx-auto mb-2" style={{ width: "80px", height: "80px" }}>
                                <div
                                  className="progress-bar bg-info"
                                  style={{ width: `${(userData.aguaConsumida / userData.aguaObjetivo) * 100}%` }}
                                ></div>
                              </div>
                              <h6>Agua</h6>
                              <p className="text-muted mb-0">
                                {userData.aguaConsumida} / {userData.aguaObjetivo}L
                              </p>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="text-center">
                              <div className="progress mx-auto mb-2" style={{ width: "80px", height: "80px" }}>
                                <div
                                  className="progress-bar bg-success"
                                  style={{ width: `${(userData.ejercicioRealizado / userData.ejercicioObjetivo) * 100}%` }}
                                ></div>
                              </div>
                              <h6>Ejercicio</h6>
                              <p className="text-muted mb-0">
                                {userData.ejercicioRealizado} / {userData.ejercicioObjetivo} min
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-header bg-light">
                        <h5 className="mb-0 text-primary-custom">Próximas Comidas</h5>
                      </div>
                      <div className="card-body">
                        {planNutricional.map(({ comida, detalle }) => (
                          <div key={comida} className="d-flex align-items-center mb-3">
                            <div className="bg-warning rounded-circle p-2 me-3">
                              <i className="bi bi-sun text-white"></i>
                            </div>
                            <div>
                              <h6 className="mb-0">{comida}</h6>
                              <small className="text-muted">{detalle}</small>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "nutricion" && (
              <div>
                <h2 className="text-primary-custom mb-4">Plan Nutricional</h2>
                <div className="card">
                  <div className="card-body">
                    <ul className="list-group">
                      {planNutricional.map(({ comida, detalle }) => (
                        <li key={comida} className="list-group-item">
                          <strong>{comida}:</strong> {detalle}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ejercicio" && (
              <div>
                <h2 className="text-primary-custom mb-4">Rutina de Ejercicios</h2>
                <div className="card">
                  <div className="card-body">
                    <ul className="list-group">
                      {rutinaEjercicio.map(({ dia, actividad }) => (
                        <li key={dia} className="list-group-item">
                          <strong>{dia}:</strong> {actividad}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "progreso" && (
              <div>
                <h2 className="text-primary-custom mb-4">Tu Progreso</h2>
                <div className="card">
                  <div className="card-body">
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Fecha</th>
                          <th>Peso (kg)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {progresoHistorial.map(({ fecha, peso }) => (
                          <tr key={fecha}>
                            <td>{fecha}</td>
                            <td>{peso}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "recetas" && (
  <div>
    <h2 style={styles.sectionTitle}>📋 Rutinas Detalladas según tu nivel</h2>
    <div style={styles.grid}>
      {planes.map((plan, index) => {
        const dificultad = getDificultad(plan.nombre)
        const dificultadLabel =
          dificultad >= 80 ? "Alto 💪" :
          dificultad >= 50 ? "Medio 🏃‍♂️" :
          "Bajo 🌱"
        const dificultadColor =
          dificultad >= 80 ? "#e74c3c" :
          dificultad >= 50 ? "#f1c40f" :
          "#2ecc71"

        // Información aumentada para rutinas
        const rutinaExtendida = {
          "Pérdida de peso inicial": {
            dieta:
              "Esta rutina está enfocada en un plan de dieta baja en calorías con énfasis en proteínas magras, verduras frescas y carbohidratos complejos. Se recomienda consumir frutas y evitar azúcares refinados y grasas saturadas para mejorar la quema de grasa.",
            ejercicio:
              "La rutina de ejercicios consiste en actividades ligeras como caminar 30 minutos diarios, estiramientos y ejercicios de movilidad articular, ideales para personas que comienzan o retoman la actividad física.",
            beneficios:
              "Ayuda a mejorar la resistencia cardiovascular, reduce la grasa corporal de forma gradual y mejora el estado de ánimo y energía general.",
          },
          "Pérdida de peso intermedio": {
            dieta:
              "Plan equilibrado que controla la ingesta de carbohidratos, enfatizando proteínas vegetales y animales de calidad, junto con una variedad de verduras. Se promueve la hidratación constante y control de porciones.",
            ejercicio:
              "Incluye entrenamientos combinados de cardio (caminata rápida, bicicleta) y fuerza (pesas, ejercicios con el peso corporal) al menos 4 días por semana para mejorar tonificación y resistencia.",
            beneficios:
              "Favorece la pérdida de grasa más marcada, aumenta la masa muscular magra y mejora la salud metabólica.",
          },
          "Pérdida de peso riguroso": {
            dieta:
              "Dieta estricta baja en carbohidratos y grasas, con control calórico riguroso y uso supervisado de suplementos. Se recomienda evitar alimentos procesados y azúcares simples.",
            ejercicio:
              "Entrenamientos intensivos diarios que combinan sesiones de HIIT, levantamiento de pesas y cardio, con énfasis en fuerza y resistencia muscular avanzada.",
            beneficios:
              "Resultados rápidos en pérdida de peso, aumento significativo de fuerza y resistencia, ideal para personas con experiencia y compromiso elevado.",
          }
        }

        const info = rutinaExtendida[plan.nombre]

        return (
          <div key={index} style={styles.card}>
            <h4 style={styles.planTitle}>Rutina {index + 1}: {plan.nombre}</h4>

            <div style={{ ...styles.badge, backgroundColor: dificultadColor }}>
              Nivel: {dificultadLabel}
            </div>

            <hr style={styles.separator} />

            <div style={styles.section}>
              <p style={styles.subTitle}>🍱 Dieta Recomendada</p>
              <p style={styles.text}>{info.dieta}</p>
            </div>

            <div style={styles.section}>
              <p style={styles.subTitle}>🏋️ Rutina de Ejercicio</p>
              <p style={styles.text}>{info.ejercicio}</p>
            </div>

            <div style={styles.section}>
              <p style={styles.subTitle}>🎯 Beneficios</p>
              <p style={styles.text}>{info.beneficios}</p>
            </div>

            <div style={styles.section}>
              <p style={styles.subTitle}>📊 Nivel de Intensidad</p>
              <div style={styles.progressBarBackground}>
                <div
                  style={{
                    ...styles.progressBarFill,
                    width: `${dificultad}%`,
                    backgroundColor: dificultadColor,
                  }}
                />
              </div>
              <p style={styles.intensityText}>{dificultad}% de intensidad</p>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)}
            {activeTab === "perfil" && (
              <div>
                <h2 style={styles.sectionTitle}>Mi Perfil</h2>

                <div className="card p-4 shadow-sm mb-4">
                  <div className="d-flex">
         <img src="/assets/perfil.jpg" alt="Foto del usuario" className="rounded-circle" style={{ width: 120, height: 120, objectFit: "cover" }} />


                    <div>
                      <h3 style={{ color: "#11472F" }}>{userData.nombre}</h3>
                      <p style={{ fontSize: "1.1rem", fontWeight: "600", color: "#555" }}>
                        Usuario activo
                      </p>
                    </div>
                  </div>

                  <hr />

                  <div className="row">
                    <div className="col-md-6">
                      <h5 style={{ color: "#11472F", marginBottom: "0.5rem" }}>Datos Personales</h5>
                      <ListGroup variant="flush">
                        <ListGroup.Item><strong>Edad:</strong> {userData.edad} años</ListGroup.Item>
                        <ListGroup.Item><strong>Peso actual:</strong> {userData.pesoActual} kg</ListGroup.Item>
                        <ListGroup.Item><strong>Altura:</strong> 1.65 m</ListGroup.Item>
                        <ListGroup.Item><strong>Objetivo:</strong> {userData.objetivo}</ListGroup.Item>
                        <ListGroup.Item><strong>Plan actual:</strong> {userData.planActual}</ListGroup.Item>
                      </ListGroup>
                    </div>

                    <div className="col-md-6">
                      <h5 style={{ color: "#11472F", marginBottom: "0.5rem" }}>Datos de suscripción</h5>
                      <ListGroup variant="flush">
                        <ListGroup.Item><strong>Email:</strong> {userData.email}</ListGroup.Item>
                        <ListGroup.Item><strong>Teléfono:</strong> {userData.telefono}</ListGroup.Item>
                        <ListGroup.Item><strong>País:</strong> {userData.pais}</ListGroup.Item>
                        <ListGroup.Item><strong>Miembro desde:</strong> {userData.miembroDesde}</ListGroup.Item>
                        <ListGroup.Item><strong>Plan:</strong> {userData.planSuscripcion}</ListGroup.Item>
                        <ListGroup.Item>
                          <strong>Estado:</strong> <span className={userData.estadoSuscripcion === "Activo" ? "text-success" : "text-danger"}>{userData.estadoSuscripcion}</span>
                        </ListGroup.Item>
                        <ListGroup.Item><strong>Próximo cargo:</strong> {userData.proximoCargo}</ListGroup.Item>
                        <ListGroup.Item><strong>Método de pago:</strong> {userData.metodoPago}</ListGroup.Item>
                      </ListGroup>
                    </div>
                  </div>

                  <hr />

                  <div>
                    <h5 style={{ color: "#11472F", marginBottom: "0.5rem" }}>Datos Nutricionales</h5>
                    <ListGroup variant="flush" horizontal>
                      <ListGroup.Item><strong>Calorías diarias:</strong> {userData.caloriasDiarias} kcal</ListGroup.Item>
                      <ListGroup.Item><strong>Proteínas:</strong> {userData.proteinas} g</ListGroup.Item>
                      <ListGroup.Item><strong>Carbohidratos:</strong> {userData.carbohidratos} g</ListGroup.Item>
                      <ListGroup.Item><strong>Grasas:</strong> {userData.grasas} g</ListGroup.Item>
                    </ListGroup>
                  </div>

                  <hr />

                  <div>
                    <h5 style={{ color: "#11472F", marginBottom: "0.5rem" }}>Tu Progreso</h5>
                    <p>Has completado el 65% de tu plan actual.</p>
                    <ProgressBar now={65} label="65%" variant="success" style={{ height: "20px", borderRadius: "10px" }} />
                  </div>

                  <hr />

                  <div>
                    <h5 style={{ color: "#11472F", marginBottom: "0.5rem" }}>Recomendaciones Personalizadas</h5>
                    <ul style={{ paddingLeft: "1.2rem" }}>
                      <li>Hidrátate con al menos 2 litros de agua al día.</li>
                      <li>Realiza 30 minutos de ejercicio cardiovascular 4 veces por semana.</li>
                      <li>Aumenta el consumo de verduras en almuerzos y cenas.</li>
                    </ul>
                  </div>

                  <div className="d-flex justify-content-end mt-3">
                    <Button variant="primary" className="me-2">Editar Perfil</Button>
                    <Button variant="danger">Cerrar Sesión</Button>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
