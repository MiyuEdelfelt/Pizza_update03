import React, { useState } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password, confirmPassword } = formData;

        // Validaciones
        if (!email || !password || !confirmPassword) {
            setMessage('Todos los campos son obligatorios.');
            setFormData({ email: '', password: '', confirmPassword: '' }); // Reinicia los campos
            return;
        }

        if (password.length < 6) {
            setMessage('La contraseña debe tener al menos 6 caracteres.');
            setFormData({ email: '', password: '', confirmPassword: '' }); // Reinicia los campos
            return;
        }

        if (password !== confirmPassword) {
            setMessage('Las contraseñas no coinciden.');
            setFormData({ email: '', password: '', confirmPassword: '' }); // Reinicia los campos
            return;
        }

        setMessage('Registro exitoso.');
        setFormData({ email: '', password: '', confirmPassword: '' }); // Reinicia los campos después del éxito
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <h2 className="text-center mb-4">Registro</h2>
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
                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña:</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        {message && <div className="alert alert-info">{message}</div>}
                        <button type="submit" className="btn btn-primary w-100">Registrar</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
