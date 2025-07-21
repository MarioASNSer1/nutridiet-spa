import Header from "../components/Header"
import Footer from "../components/Footer"

export default function TestBootstrap() {
  return (
    <>
      <Header />

      <div className="container py-5">
        <h1 className="text-center mb-4">Estilos que podemos usar de Bootstrap</h1>

        {/* grillas */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="alert alert-primary">Columna 1</div>
          </div>
          <div className="col-md-4">
            <div className="alert alert-success">Columna 2</div>
          </div>
          <div className="col-md-4">
            <div className="alert alert-warning">Columna 3</div>
          </div>
        </div>

        {/* estilos bontones */}
        <div className="mb-4">
          <button className="btn btn-primary me-2">Botón Primario</button>
          <button className="btn btn-secondary me-2">Botón Secundario</button>
          <button className="btn btn-success me-2">Botón Success</button>
          <button className="btn btn-primary-custom">Botón personalizado</button>
        </div>

        {/*Card */}
        <div className="card" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h5 className="card-title">Cards</h5>
            <p className="card-text">estilos textos.</p>
            <a href="#" className="btn btn-primary">
              Botón en Card
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
