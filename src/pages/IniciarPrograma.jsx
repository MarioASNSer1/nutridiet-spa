import React, { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function IniciarPrograma() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    edad: "",
    peso: "",
    altura: "",
    genero: "",
    pesoDeseado: "",
    condiciones: [],
    comidas: "",
    actividad: "",
    alimentos: [],
    agua: "",
    experiencia: "",
  })

  const [recomendacion, setRecomendacion] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    if (type === "checkbox") {
      let updatedArray = formData[name] ? [...formData[name]] : []
      if (checked) {
        updatedArray.push(value)
      } else {
        updatedArray = updatedArray.filter((item) => item !== value)
      }
      setFormData({
        ...formData,
        [name]: updatedArray,
      })
    } else {
      setFormData({
        ...formData,
        [name]: value,
      })
    }
  }

  const nextStep = () => {
    if (currentStep < steps.length) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const calcularRecomendacion = (data) => {
    // Variables para puntaje
    let score = 0

    // Ejemplo simple: suma puntos según algunos criterios
    // Edad: personas jóvenes menos exigentes, personas mayores más cuidado
    if (parseInt(data.edad) >= 18 && parseInt(data.edad) <= 40) score += 2
    else if (parseInt(data.edad) > 40 && parseInt(data.edad) <= 60) score += 1
    else score += 0

    // Peso deseado comparado con peso actual (meta de pérdida o ganancia)
    const pesoActual = parseFloat(data.peso)
    const pesoMeta = parseFloat(data.pesoDeseado)
    if (!isNaN(pesoActual) && !isNaN(pesoMeta)) {
      const diff = pesoActual - pesoMeta
      if (Math.abs(diff) > 10) score += 3
      else if (Math.abs(diff) > 5) score += 2
      else score += 1
    }

    // Nivel de actividad física
    switch (data.actividad) {
      case "Alto":
        score += 3
        break
      case "Moderado":
        score += 2
        break
      case "Ligero":
        score += 1
        break
      case "Sedentario":
        score += 0
        break
      default:
        score += 1
    }

    // Experiencia (si tienes)
    switch (data.experiencia) {
      case "Avanzada":
        score += 3
        break
      case "Intermedia":
        score += 2
        break
      case "Principiante":
        score += 1
        break
      default:
        score += 1
    }

    // Finalmente, decidir plan
    if (score >= 8) return "Plan Rígido"
    if (score >= 5) return "Plan Intermedio"
    return "Plan Básico"
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const plan = calcularRecomendacion(formData)
    setRecomendacion(plan)
    console.log("Datos del formulario:", formData)
    alert(`¡Programa iniciado! Según tus respuestas, te recomendamos el ${plan}.`)
  }

  // Arreglo con 10 preguntas, cada paso con una pregunta y su input
  const steps = [
    {
      pregunta: "🎂 ¿Cuál es tu edad?",
      input: (
        <input
          type="number"
          name="edad"
          className="form-control"
          value={formData.edad}
          onChange={handleChange}
          required
          min={1}
        />
      ),
    },
    {
      pregunta: "⚖️ ¿Cuánto pesas actualmente? (kg)",
      input: (
        <input
          type="number"
          name="peso"
          className="form-control"
          value={formData.peso}
          onChange={handleChange}
          required
          min={1}
        />
      ),
    },
    {
      pregunta: "📏 ¿Cuál es tu estatura? (cm)",
      input: (
        <input
          type="number"
          name="altura"
          className="form-control"
          value={formData.altura}
          onChange={handleChange}
          required
          min={1}
        />
      ),
    },
    {
      pregunta: "👤 ¿Con qué género te identificas?",
      input: ['Masculino', 'Femenino', 'Otro / Prefiero no decir'].map((g) => (
        <div key={g} className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="genero"
            value={g}
            onChange={handleChange}
            required
            checked={formData.genero === g}
          />
          <label className="form-check-label">{g}</label>
        </div>
      )),
    },
    {
      pregunta: "🎯 ¿Cuál es tu objetivo de peso? (kg)",
      input: (
        <input
          type="number"
          name="pesoDeseado"
          className="form-control"
          value={formData.pesoDeseado}
          onChange={handleChange}
          required
          min={1}
        />
      ),
    },
    {
      pregunta: "🩺 ¿Tienes alguna condición médica?",
      input: ['Diabetes', 'Hipertensión', 'Alergias', 'Ninguna'].map((c) => (
        <div key={c} className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="condiciones"
            value={c}
            onChange={handleChange}
            checked={formData.condiciones.includes(c)}
          />
          <label className="form-check-label">{c}</label>
        </div>
      )),
    },
    {
      pregunta: "🍽️ ¿Cuántas veces comes al día?",
      input: ['2 veces', '3 veces', '4 veces', '5 o más veces'].map((c) => (
        <div key={c} className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="comidas"
            value={c}
            onChange={handleChange}
            required
            checked={formData.comidas === c}
          />
          <label className="form-check-label">{c}</label>
        </div>
      )),
    },
    {
      pregunta: "🏃‍♂️ ¿Cómo describirías tu nivel de actividad física?",
      input: ['Sedentario', 'Ligero', 'Moderado', 'Alto'].map((a) => (
        <div key={a} className="form-check">
          <input
            type="radio"
            className="form-check-input"
            name="actividad"
            value={a}
            onChange={handleChange}
            required
            checked={formData.actividad === a}
          />
          <label className="form-check-label">{a}</label>
        </div>
      )),
    },
    {
      pregunta: "🥗 ¿Qué tipo de alimentos predominan en tu dieta?",
      input: ['Carbohidratos', 'Proteínas', 'Grasas', 'Frutas y verduras'].map((a) => (
        <div key={a} className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            name="alimentos"
            value={a}
            onChange={handleChange}
            checked={formData.alimentos?.includes(a)}
          />
          <label className="form-check-label">{a}</label>
        </div>
      )),
    },
    {
      pregunta: "💧 ¿Cuánta agua bebes al día?",
      input: (
        <select
          name="agua"
          className="form-select"
          value={formData.agua}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una opción</option>
          <option>Menos de 1 litro</option>
          <option>Entre 1 y 2 litros</option>
          <option>Más de 2 litros</option>
        </select>
      ),
    },
  ]

  return (
    <>
      <Header />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold text-primary-custom">Iniciar tu Programa</h1>
              <p className="lead text-muted">Completa este cuestionario para crear tu plan personalizado</p>
            </div>

            {/* Barra de progreso */}
            <div className="progress mb-4" style={{ height: "8px" }}>
              <div
                className="progress-bar bg-primary-custom"
                style={{ width: `${(currentStep / steps.length) * 100}%` }}
              ></div>
            </div>

            <div className="card shadow-sm">
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <h4 className="text-primary-custom mb-4">Paso {currentStep} de {steps.length}</h4>

                  <div className="mb-3">
                    <label className="form-label fw-bold">{steps[currentStep - 1].pregunta}</label>
                    {steps[currentStep - 1].input}
                  </div>

                  <div className="d-flex justify-content-between mt-4">
                    {currentStep > 1 && (
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={prevStep}
                      >
                        ← Anterior
                      </button>
                    )}

                    <div className="ms-auto">
                      {currentStep < steps.length ? (
                        <button
                          type="button"
                          className="btn btn-primary-custom"
                          onClick={nextStep}
                        >
                          Siguiente →
                        </button>
                      ) : (
                        <button type="submit" className="btn btn-success">
                          Confirmar y Crear Plan
                        </button>
                      )}
                    </div>
                  </div>
                </form>

                {/* Mostrar recomendación después de enviar */}
                {recomendacion && (
                  <div className="alert alert-info mt-4" role="alert">
                    <h5>Recomendación:</h5>
                    <p>Según tus respuestas, el plan que más se ajusta a ti es: <strong>{recomendacion}</strong></p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
