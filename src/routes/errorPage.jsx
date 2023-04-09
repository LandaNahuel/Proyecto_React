import { useRouteError } from "react-router-dom";
import "./error.css";
import NavBar from "../componentes/Navbar";

function ErrorPage() {
  const { status } = useRouteError();

  return (
    <main>
        <NavBar/>
    <div className="error-container">
      <h1 className="error-title">¡Pww!</h1>
      <h2 className="error-subtitle">Algo salió mal en nuestra cafetería.</h2>
      <h2 className="error-subtitle">Error {status}</h2>
      <button className="error-button" onClick={() => window.location.href = "/"}>Volver a la página principal</button>
    </div>
    </main>
  );
}

export default ErrorPage;   