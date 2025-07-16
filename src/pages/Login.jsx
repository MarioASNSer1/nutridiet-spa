"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
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

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido"
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      console.log("Datos de login:", formData)
      alert("¡Inicio de sesión exitoso!")
      // Aquí rediriges a la página que quieres
      navigate("/dashboard")  // o "/planes", "/iniciar-programa" según tu flujo
    }
  }

  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="card shadow-sm">
              <div className="card-body p-5">
                <div className="text-center mb-4">
                  <h2 className="fw-bold text-primary-custom">Iniciar Sesión</h2>
                  <p className="text-muted">Accede a tu cuenta de NutriDiet</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
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

                  <div className="mb-3">
                    <label className="form-label fw-bold">Contraseña</label>
                    <input
                      type="password"
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Tu contraseña"
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="remember"
                        checked={formData.remember}
                        onChange={handleInputChange}
                        id="remember"
                      />
                      <label className="form-check-label" htmlFor="remember">
                        Recordarme
                      </label>
                    </div>
                    <Link to="#" className="text-primary-custom text-decoration-none">
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  <button type="submit" className="btn btn-primary-custom w-100 py-2 mb-3">
                    <i className="bi bi-box-arrow-in-right me-2"></i>
                    Iniciar Sesión
                  </button>

                  <div className="text-center mb-3">
                    <span className="text-muted">o</span>
                  </div>

                  <button type="button" className="btn btn-outline-dark w-100 mb-3">
                    <i className="bi bi-google me-2"></i>
                    Continuar con Google
                  </button>

                  <button type="button" className="btn btn-outline-primary w-100 mb-4">
                    <i className="bi bi-facebook me-2"></i>
                    Continuar con Facebook
                  </button>

                  <div className="text-center">
                    <p className="text-muted mb-0">
                      ¿No tienes cuenta?
                      <Link to="/registro" className="text-primary-custom text-decoration-none ms-1">
                        Regístrate aquí
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
