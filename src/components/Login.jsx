import React, { useState } from 'react';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = formData;

        // Validaciones básicas
        if (!email || !password) {
            setMessage('Todos los campos son obligatorios.');
            setFormData({ email: '', password: '' }); // Reinicia los campos
            return;
        }

        // Validación de longitud de la contraseña
        if (password.length < 6) {
            //No me convence dar esta información al usuario ya que le estamos dando indicio del error, por lo cuál facilita saber el error a una persona que no es el usuario real.
            setMessage('La contraseña es muy corta, no cumple con los caracteres necesarios.');
            setFormData({ email: '', password: '' }); // Reinicia los campos
            return;
        }

        setMessage('Inicio de sesión exitoso.');
        setFormData({ email: '', password: '' }); // Reinicia los campos después del éxito
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <h2 className="text-center mb-4">Login</h2>
                    <form onSubmit={handleSubmit} className="border p-4 rounded shadow-sm">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Contraseña:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        {message && <div className="alert alert-info">{message}</div>}
                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
