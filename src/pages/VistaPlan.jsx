import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function VistaPlan() {
  const { nombrePlan } = useParams();
  const planNombre = decodeURIComponent(nombrePlan);

  const plan = getPlanDetalles(planNombre);
  const dificultad = getDificultad(planNombre);
  const dificultadLabel =
    dificultad >= 80 ? 'Alto 💪' :
    dificultad >= 50 ? 'Medio 🏃‍♂️' :
    'Bajo 🌱';
  const dificultadColor =
    dificultad >= 80 ? '#e74c3c' :
    dificultad >= 50 ? '#f1c40f' :
    '#2ecc71';

  return (
    <>
      <Header />
      <div className="container py-5">
        <h2 className="text-primary-custom mb-4 text-center">¡Bienvenido al {planNombre}!</h2>
        <p className="lead text-center">
          Tu registro fue exitoso. Aquí tienes los detalles personalizados de tu plan <strong>{planNombre}</strong>.
        </p>

        <div style={styles.card}>
          
          <p style={{ textAlign: 'center', fontWeight: 'bold', color: '#555', fontSize: '1.25rem' }}>{plan.precio}</p>
          <p style={{ textAlign: 'center', fontStyle: 'italic', marginBottom: '1.5rem' }}>{plan.descripcion}</p>

          <div style={{ ...styles.badge, backgroundColor: dificultadColor }}>
            Nivel: {dificultadLabel}
          </div>

          <hr style={styles.separator} />

          <div style={styles.section}>
            <p style={styles.subTitle}>🍱 Dieta Recomendada</p>
            <p style={styles.text}>{plan.dieta}</p>
          </div>

          <div style={styles.section}>
            <p style={styles.subTitle}>🏋️ Rutina de Ejercicio</p>
            <p style={styles.text}>{plan.ejercicio}</p>
          </div>

          <div style={styles.section}>
            <p style={styles.subTitle}>✅ Beneficios del Plan</p>
            <ul>
              {plan.beneficios.map((item, i) => (
                <li key={i} style={styles.text}>{item}</li>
              ))}
            </ul>
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
      </div>
      <Footer />
    </>
  );
}

const getPlanDetalles = (nombre) => {
  const nombreLower = nombre.toLowerCase();

  if (nombreLower.includes("rígido") || nombreLower.includes("rigido") || nombreLower.includes("riguroso")) {
    return {
      precio: "$99/mes",
      descripcion: "Máximo nivel de personalización y soporte.",
      dieta: "Alimentación alta en proteínas magras (pollo, pescado, huevos, tofu), baja en carbohidratos simples y azúcares refinados. Incluye grasas saludables como aguacate y nueces, con enfoque en ayuno intermitente para maximizar quema de grasa.",
      ejercicio: "Entrenamiento funcional intenso 6 días a la semana: 3 días de HIIT avanzado, 2 días de fuerza con pesas y 1 día de movilidad y recuperación activa.",
      beneficios: [
        "Todo lo del Plan Intermedio",
        "Entrenador personal asignado",
        "Consultas semanales con nutricionista",
        "Plan de suplementación",
        "Análisis corporal mensual",
        "Acceso a eventos exclusivos",
        "Soporte premium 24/7"
      ]
    };
  }

  if (nombreLower.includes("intermedio")) {
    return {
      precio: "$59/mes",
      descripcion: "La opción más popular para resultados óptimos.",
      dieta: "Balance equilibrado de macronutrientes: 40% carbohidratos complejos, 30% proteínas y 30% grasas saludables. Opciones variadas y fáciles de preparar.",
      ejercicio: "Entrenamiento estructurado 4 días a la semana: 2 días de cardio moderado, 1 día de fuerza en circuito y 1 día de yoga o pilates.",
      beneficios: [
        "Todo lo del Plan Básico",
        "Consultas mensuales con nutricionista",
        "Rutinas de ejercicio avanzadas",
        "Seguimiento diario",
        "App móvil premium",
        "Soporte prioritario 24/7"
      ]
    };
  }

  if (nombreLower.includes("inicial") || nombreLower.includes("básico") || nombreLower.includes("basico")) {
    return {
      precio: "$29/mes",
      descripcion: "Perfecto para comenzar tu transformación.",
      dieta: "Plan nutritivo y balanceado con 3 comidas principales y 2 snacks saludables. Recetas fáciles y accesibles.",
      ejercicio: "Ejercicios suaves 3 veces por semana: caminatas, estiramientos y movimientos funcionales básicos.",
      beneficios: [
        "Plan nutricional personalizado",
        "Rutinas de ejercicio básicas",
        "Seguimiento semanal",
        "Acceso a recetas saludables",
        "Soporte por email"
      ]
    };
  }

  // Default plan
  return {
    precio: "$49/mes",
    descripcion: "Plan estándar adaptable a cualquier nivel.",
    dieta: "Alimentación equilibrada con frutas, proteínas magras, vegetales y cereales integrales.",
    ejercicio: "Ejercicios de cuerpo completo 3 veces por semana con sesiones de movilidad y cardio ligero.",
    beneficios: [
      "Plan balanceado general",
      "Acceso a comunidad en línea",
      "Recomendaciones semanales",
      "Soporte básico"
    ]
  };
};

const getDificultad = (nombre) => {
  if (nombre.toLowerCase().includes('rígido') || nombre.toLowerCase().includes('rigido') || nombre.toLowerCase().includes('riguroso')) return 90;
  if (nombre.toLowerCase().includes('intermedio')) return 60;
  if (nombre.toLowerCase().includes('inicial') || nombre.toLowerCase().includes('básico') || nombre.toLowerCase().includes('basico')) return 30;
  return 50;
};

const styles = {
  card: {
    background: '#fff',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    padding: '1.5rem',
    textAlign: 'left',
    maxWidth: '700px',
    margin: '2rem auto',
  },
  planTitle: {
    fontSize: '1.8rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    textAlign: 'center'
  },
  badge: {
    color: '#fff',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    display: 'inline-block',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  separator: {
    borderTop: '1px solid #ccc',
    margin: '1rem 0',
  },
  section: {
    marginBottom: '1rem',
  },
  subTitle: {
    fontWeight: '600',
    marginBottom: '0.3rem',
  },
  text: {
    fontSize: '1rem',
  },
  progressBarBackground: {
    backgroundColor: '#eee',
    borderRadius: '20px',
    height: '12px',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: '20px',
    transition: 'width 0.5s ease',
  },
  intensityText: {
    marginTop: '0.5rem',
    fontSize: '0.9rem',
    fontStyle: 'italic',
  }
};
