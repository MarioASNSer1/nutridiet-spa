import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Container,
  Card,
  Row,
  Col,
  ProgressBar,
  ListGroup,
  Button,
} from "react-bootstrap";

import usuarioImg from "../assets/usuario.jpg"; // Ruta de la imagen

const Panel = () => {
  const progreso = 65; // ejemplo

  return (
    <>
      <Header />

      <Container className="py-5">
        <h2 className="text-center mb-4" style={{ color: "#11472F" }}>
          Panel del Usuario
        </h2>

        {/* PERFIL */}
        <Card className="p-4 shadow-sm mb-4">
          <Row>
            <Col md={4} className="text-center">
              <img
                src={usuarioImg}
                alt="Foto del usuario"
                className="rounded-circle mb-3"
                width="150"
                height="150"
              />
              <h5>Mario Serrato</h5>
              <p className="text-muted">Usuario</p>
            </Col>
            <Col md={8}>
              <h5>Datos Personales</h5>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Edad:</strong> 29 años</ListGroup.Item>
                <ListGroup.Item><strong>Peso:</strong> 72 kg</ListGroup.Item>
                <ListGroup.Item><strong>Altura:</strong> 1.74 m</ListGroup.Item>
                <ListGroup.Item><strong>Objetivo:</strong> Reducción de grasa</ListGroup.Item>
                <ListGroup.Item><strong>Plan actual:</strong> Intermedio</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Card>

        {/* NUEVOS DATOS */}
        <Row className="gy-4">
          {/* Datos nutricionales */}
          <Col md={4}>
            <Card className="p-3 shadow-sm h-100">
              <h5 className="mb-3">Datos nutricionales</h5>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Calorías diarias:</strong> 1 950 kcal</ListGroup.Item>
                <ListGroup.Item><strong>Proteínas:</strong> 120 g</ListGroup.Item>
                <ListGroup.Item><strong>Carbohidratos:</strong> 200 g</ListGroup.Item>
                <ListGroup.Item><strong>Grasas:</strong> 55 g</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* Datos de usuario */}
          <Col md={4}>
            <Card className="p-3 shadow-sm h-100">
              <h5 className="mb-3">Datos de usuario</h5>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Email:</strong> mario@example.com</ListGroup.Item>
                <ListGroup.Item><strong>Teléfono:</strong> +57 310 123 4567</ListGroup.Item>
                <ListGroup.Item><strong>País:</strong> Colombia</ListGroup.Item>
                <ListGroup.Item><strong>Miembro desde:</strong> 12 ene 2025</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>

          {/* Datos de suscripción */}
          <Col md={4}>
            <Card className="p-3 shadow-sm h-100">
              <h5 className="mb-3">Datos de suscripción</h5>
              <ListGroup variant="flush">
                <ListGroup.Item><strong>Plan:</strong> Intermedio mensual</ListGroup.Item>
                <ListGroup.Item><strong>Estado:</strong> <span className="text-success">Activo</span></ListGroup.Item>
                <ListGroup.Item><strong>Próximo cargo:</strong> 15 jul 2025</ListGroup.Item>
                <ListGroup.Item><strong>Método de pago:</strong> Visa •••• 4242</ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        {/* PROGRESO */}
        <Card className="p-4 shadow-sm my-4">
          <h5 className="mb-3">Tu Progreso</h5>
          <p>Has completado el {progreso}% de tu plan actual.</p>
          <ProgressBar now={progreso} label={`${progreso}%`} />
        </Card>

        {/* RECOMENDACIONES */}
        <Card className="p-4 shadow-sm mb-4">
          <h5 className="mb-3">Recomendaciones personalizadas</h5>
          <ul>
            <li>Hidrátate con al menos 2 litros de agua al día.</li>
            <li>Realiza 30 min de cardio moderado diariamente.</li>
            <li>Limita los azúcares añadidos.</li>
          </ul>
        </Card>

        {/* ACCIONES RÁPIDAS */}
        <Card className="p-4 shadow-sm">
          <h5 className="mb-3">Acciones rápidas</h5>
          <div className="d-flex gap-3 flex-wrap">
            <Button variant="success">Actualizar peso</Button>
            <Button variant="outline-primary">Ver mi plan</Button>
            <Button variant="outline-secondary">Cambiar datos</Button>
          </div>
        </Card>
      </Container>

      <Footer />
    </>
  );
};

export default Panel;
