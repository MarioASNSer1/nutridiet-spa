"use client"

import { useState } from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    asunto: "",
    mensaje: "",
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Mensaje enviado:", formData)
    alert("¡Mensaje enviado! Te contactaremos pronto.")
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      asunto: "",
      mensaje: "",
    })
  }

  return (
    <>
      <Header />

      <div className="container py-5">
        <div className="row text-center mb-5">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-4 fw-bold text-primary-custom mb-3">Contáctanos</h1>
            <p className="lead text-muted">
              ¿Tienes preguntas? Estamos aquí para ayudarte en tu camino hacia una vida más saludable.
            </p>
          </div>
        </div>

        <div className="row g-5">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h4 className="text-primary-custom mb-4">Envíanos un Mensaje</h4>

                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Nombre Completo *</label>
                      <input
                        type="text"
                        className="form-control"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label fw-bold">Email *</label>
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Mensaje *</label>
                    <textarea
                      className="form-control"
                      rows={6}
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      placeholder="Escribe tu mensaje aquí..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary-custom btn-lg">
                    <i className="bi bi-send me-2"></i>
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="card bg-primary-custom text-white">
              <div className="card-body p-4">
                <h5 className="card-title mb-4">Información de Contacto</h5>

                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope fs-4 me-3"></i>
                  <div>
                    <h6 className="mb-0">Email</h6>
                    <small>info@nutriDiet.com</small>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone fs-4 me-3"></i>
                  <div>
                    <h6 className="mb-0">Teléfono</h6>
                    <small>+1 (800) 123-4567</small>
                  </div>
                </div>

                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt fs-4 me-3"></i>
                  <div>
                    <h6 className="mb-0">Dirección</h6>
                    <small>
                      123 Calle Antofagasta 
                      <br />
                      Colombia - Ecuador - Bolivia
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
