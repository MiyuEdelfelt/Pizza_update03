import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext'; 

const Navbar = () => {
    const { totalPrice } = useCart(); // Consumimos el context

    // Función para formatear el total con separador de miles
    const formatCurrency = (value) => {
        return value.toLocaleString('es-CL');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold ms-3" to="/">
                    Pizzería Mamma Mia!
                </Link>
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
                        <li className="nav-item">
                            <Link className="btn btn-outline-light mx-1 rounded-pill" to="/">
                                🍕 Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="btn btn-outline-light mx-1 rounded-pill d-flex align-items-center" to="/profile">
                                👤 Profile
                            </Link>
                        </li>
                    </ul>
                    {/* Botón del carrito */}
                    <Link
                        className="btn btn-outline-info fw-bold me-3 rounded-pill fs-6 px-3 py-2"
                        to="/cart"
                    >
                        🛒 Total: ${formatCurrency(totalPrice)}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
