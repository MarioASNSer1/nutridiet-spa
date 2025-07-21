"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"

export default function Registro() {
  const navigate = useNavigate()
  const [planSeleccionado, setPlanSeleccionado] = useState("")

  useEffect(() => {
    const plan = localStorage.getItem("planSeleccionado") || "Plan Básico"
    setPlanSeleccionado(plan)
  }, [])

  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    password: "",
    confirmPassword: "",
    telefono: "",
    fechaNacimiento: "",
    genero: "",
    terminos: false,
    newsletter: false,
  })

  const [errors, setErrors] = useState({})

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    })
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido"
    if (!formData.apellido.trim()) newErrors.apellido = "El apellido es requerido"
    if (!formData.email.trim()) newErrors.email = "El email es requerido"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email inválido"

    if (!formData.password) newErrors.password = "La contraseña es requerida"
    else if (formData.password.length < 6) newErrors.password = "La contraseña debe tener al menos 6 caracteres"

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden"
    }

    if (!formData.terminos) newErrors.terminos = "Debes aceptar los términos y condiciones"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Datos de registro:", formData)
      alert("¡Registro exitoso! Te hemos enviado un email de confirmación.")

      // Limpiar el formulario
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        password: "",
        confirmPassword: "",
        telefono: "",
        fechaNacimiento: "",
        genero: "",
        terminos: false,
        newsletter: false,
      })

      const plan = localStorage.getItem("planSeleccionado") || "Plan Básico"
      localStorage.removeItem("planSeleccionado")
      navigate(`/planes/${encodeURIComponent(plan)}`)
    }
  }

  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-sm">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-primary-custom">Crear Cuenta</h2>
                  <p className="text-muted">Únete a NutriDiet y comienza tu transformación</p>
                  <p className="text-muted">Has elegido: <strong>{planSeleccionado}</strong></p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Nombre *</label>
                      <input
                        type="text"
                        className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                      />
                      {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Apellido *</label>
                      <input
                        type="text"
                        className={`form-control ${errors.apellido ? "is-invalid" : ""}`}
                        name="apellido"
                        value={formData.apellido}
                        onChange={handleInputChange}
                        placeholder="Tu apellido"
                      />
                      {errors.apellido && <div className="invalid-feedback">{errors.apellido}</div>}
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Email *</label>
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Contraseña *</label>
                      <input
                        type="password"
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="Mínimo 6 caracteres"
                      />
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Confirmar Contraseña *</label>
                      <input
                        type="password"
                        className={`form-control ${errors.confirmPassword ? "is-invalid" : ""}`}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="Repite tu contraseña"
                      />
                      {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Teléfono</label>
                      <input
                        type="tel"
                        className="form-control"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Fecha de Nacimiento</label>
                      <input
                        type="date"
                        className="form-control"
                        name="fechaNacimiento"
                        value={formData.fechaNacimiento}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-bold">Género</label>
                    <select
                      className="form-select"
                      name="genero"
                      value={formData.genero}
                      onChange={handleInputChange}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="masculino">Masculino</option>
                      <option value="femenino">Femenino</option>
                      <option value="otro">Otro</option>
                      <option value="no-especificar">Prefiero no especificar</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className={`form-check-input ${errors.terminos ? "is-invalid" : ""}`}
                        type="checkbox"
                        name="terminos"
                        checked={formData.terminos}
                        onChange={handleInputChange}
                        id="terminos"
                      />
                      <label className="form-check-label" htmlFor="terminos">
                        Acepto los{" "}
                        <a href="#" className="text-primary-custom">términos y condiciones</a> y la{" "}
                        <a href="#" className="text-primary-custom">política de privacidad</a> *
                      </label>
                      {errors.terminos && <div className="invalid-feedback d-block">{errors.terminos}</div>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="newsletter"
                        checked={formData.newsletter}
                        onChange={handleInputChange}
                        id="newsletter"
                      />
                      <label className="form-check-label" htmlFor="newsletter">
                        Quiero recibir consejos de nutrición y ofertas especiales por email
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary-custom w-100 py-2 mb-3">
                    <i className="bi bi-person-plus me-2"></i>
                    Crear Cuenta
                  </button>

                  <div className="text-center">
                    <p className="text-muted mb-0">
                      ¿Ya tienes cuenta?
                      <Link to="/login" className="text-primary-custom text-decoration-none ms-1">
                        Iniciar Sesión
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
