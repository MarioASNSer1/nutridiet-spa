"use client"; 

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Nuevo estado para controlar la carga
  const [loginError, setLoginError] = useState(""); // Nuevo estado para errores del servidor/API

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
    // Limpiar el error específico del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    }
    // Limpiar cualquier error general de login al cambiar los campos
    if (loginError) {
      setLoginError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El formato del email es inválido.";
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es requerida.";
    } else if (formData.password.length < 6) { // Ejemplo: añadir validación de longitud
      newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => { // Usar async para manejar peticiones
    e.preventDefault();
    setLoginError(""); // Limpiar errores previos de login
    
    if (validateForm()) {
      setLoading(true); // Activar estado de carga

      try {
        // --- AQUÍ ES DONDE HARÍAS LA LLAMADA A TU API DE LOGIN ---
        // Ejemplo de fetch (reemplaza con tu endpoint real y manejo de credenciales)
        const response = await new Promise(resolve => setTimeout(() => { // Simula un delay de red
          if (formData.email === "test@example.com" && formData.password === "password123") {
            resolve({ ok: true, json: () => Promise.resolve({ message: "Login exitoso!" }) });
          } else {
            resolve({ ok: false, status: 401, json: () => Promise.resolve({ message: "Credenciales inválidas." }) });
          }
        }, 1500)); // Simula 1.5 segundos de carga

        // const response = await fetch('/api/login', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     email: formData.email,
        //     password: formData.password,
        //     remember: formData.remember,
        //   }),
        // });

        const data = await response.json();

        if (response.ok) {
          console.log("Datos de login:", formData);
          console.log("Respuesta del servidor:", data);
          // Puedes guardar el token de autenticación o datos del usuario aquí (localStorage, Context API, Redux, etc.)
          // alert("¡Inicio de sesión exitoso!"); // Considera eliminar esto en producción
          navigate("/panel"); // Redirige al panel de usuario o dashboard
        } else {
          setLoginError(data.message || "Error al iniciar sesión. Inténtalo de nuevo.");
        }
      } catch (error) {
        console.error("Error en la solicitud de login:", error);
        setLoginError("Hubo un problema de conexión. Por favor, intenta de nuevo más tarde.");
      } finally {
        setLoading(false); // Desactivar estado de carga
      }
    }
  };

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

                <form onSubmit={handleSubmit} noValidate> {/* Añadido noValidate para confiar en la validación de React */}
                  {loginError && (
                    <div className="alert alert-danger mb-3" role="alert">
                      {loginError}
                    </div>
                  )}

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">Email</label> {/* Añadido htmlFor */}
                    <input
                      type="email"
                      className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      id="email" // Añadido id
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      autoComplete="username" // Sugerencia para navegadores
                      aria-describedby="emailFeedback" // Para accesibilidad
                    />
                    {errors.email && <div id="emailFeedback" className="invalid-feedback">{errors.email}</div>}
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-bold">Contraseña</label> {/* Añadido htmlFor */}
                    <input
                      type="password"
                      className={`form-control ${errors.password ? "is-invalid" : ""}`}
                      id="password" // Añadido id
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Tu contraseña"
                      autoComplete="current-password" // Sugerencia para navegadores
                      aria-describedby="passwordFeedback" // Para accesibilidad
                    />
                    {errors.password && <div id="passwordFeedback" className="invalid-feedback">{errors.password}</div>}
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
                    <Link to="/recuperar-contrasena" className="text-primary-custom text-decoration-none"> {/* Ruta real */}
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary-custom w-100 py-2 mb-3"
                    disabled={loading} // Deshabilita el botón durante la carga
                  >
                    {loading ? (
                      <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Iniciando Sesión...
                      </>
                    ) : (
                      <>
                        <i className="bi bi-box-arrow-in-right me-2"></i>
                        Iniciar Sesión
                      </>
                    )}
                  </button>

                  <div className="text-center mb-3">
                    <span className="text-muted">o</span>
                  </div>

                  {/* Estos botones requieren integración de SDKs para funcionar */}
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
  );
}
