import React from 'react';

const Navbar2 = () => {
  const total = 25000;
  const token = false; // Cambiar a true para simular un usuario logueado

  // Función para formatear el total con separador de miles
  const formatCurrency = (value) => {
    return value.toLocaleString('es-CL');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold ms-3" href="#">
          Pizzería Mamma Mia!
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* Botón Home (siempre visible) */}
            <li className="nav-item">
              <a className="btn btn-outline-light mx-1 rounded-pill" href="#">
                🍕 Home
              </a>
            </li>
            {/* Opciones dependiendo del token */}
            {token ? (
              <>
                <li className="nav-item">
                  <a className="btn btn-outline-light mx-1 rounded-pill" href="#">
                    🔓 Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-light mx-1 rounded-pill" href="#">
                    🔒 Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="btn btn-outline-light mx-1 rounded-pill" href="#">
                    🔐 Login
                  </a>
                </li>
                <li className="nav-item">
                  <a className="btn btn-outline-light mx-1 rounded-pill" href="#">
                    🔐 Register
                  </a>
                </li>
              </>
            )}
          </ul>
          <span className="btn btn-outline-info fw-bold me-3 rounded-pill fs-6 px-3 py-2">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
