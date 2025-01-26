import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/404.jpg"; 

const NotFound = () => {
    return (
        <div className="text-center mt-5">
            <img
                src={notFoundImage}
                alt="404 Not Found"
                className="img-fluid mb-4"
                style={{ maxWidth: "400px", height: "auto" }} 
            />
            <h1>404 - Página no encontrada</h1>
            <p>La página que buscas no existe.</p>
            <Link to="/" className="btn btn-primary mt-3">
                Volver al inicio
            </Link>
        </div>
    );
};

export default NotFound;
