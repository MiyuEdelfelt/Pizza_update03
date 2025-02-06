import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useUser } from '../UserContext';

const Navbar = () => {
    const { totalPrice } = useCart();
    const { token, logout } = useUser();

    const formatCurrency = (value) => {
        return value.toLocaleString('es-CL');
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold ms-3" to="/">
                    Pizzería Mamma Mia!
                </Link>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="btn btn-outline-light mx-1 rounded-pill" to="/">
                                🍕 Home
                            </Link>
                        </li>
                        {token ? (
                            <>
                                <li className="nav-item">
                                    <Link className="btn btn-outline-light mx-1 rounded-pill" to="/profile">
                                        👤 Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-outline-danger mx-1 rounded-pill" onClick={logout}>
                                        🚪 Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="btn btn-outline-light mx-1 rounded-pill" to="/login">
                                        🔑 Login
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="btn btn-outline-light mx-1 rounded-pill" to="/register">
                                        📝 Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                    <Link className="btn btn-outline-info fw-bold me-3 rounded-pill fs-6 px-3 py-2" to="/cart">
                        🛒 Total: ${formatCurrency(totalPrice)}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
