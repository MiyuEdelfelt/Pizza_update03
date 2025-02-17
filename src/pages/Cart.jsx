import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cart, increaseCount, decreaseCount, removeFromCart, totalPrice, clearCart } = useCart();
    const { token } = useUser();
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleCheckout = async () => {
        if (cart.length === 0) {
            setMessage('🛒 El carrito está vacío. Agrega productos antes de pagar.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/checkouts', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ items: cart })
            });

            if (response.ok) {
                setMessage('🎉 Compra realizada con éxito ✅');

                // 🧹 Vaciar el carrito después de la compra
                clearCart();

                // ⏳ Redirigir al usuario después de 3 segundos
                setTimeout(() => {
                    setMessage('');
                    navigate('/'); // Redirige a la página de inicio después de la compra
                }, 3000);
            } else {
                throw new Error('⚠️ Error al procesar la compra. Inténtalo nuevamente.');
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div className="container my-5">
            <h3 className="mb-4">Detalles del pedido:</h3>
            {cart.length === 0 ? (
                <h5 className="text-center text-muted">🛒 Tu carrito está vacío.</h5>
            ) : (
                <table className="table align-middle">
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Producto</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item) => (
                            <tr key={item.id}>
                                <td><img src={item.img} alt={item.name} style={{ maxWidth: '70px' }} /></td>
                                <td className="fw-bold">{item.name}</td>
                                <td>${item.price.toLocaleString('es-CL')}</td>
                                <td>
                                    <button className="btn btn-outline-danger btn-sm me-2" onClick={() => decreaseCount(item.id)}>-</button>
                                    {item.count}
                                    <button className="btn btn-outline-primary btn-sm ms-2" onClick={() => increaseCount(item.id)}>+</button>
                                </td>
                                <td>${(item.price * item.count).toLocaleString('es-CL')}</td>
                                <td><button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>🗑️</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="fw-bold">Total: ${totalPrice.toLocaleString('es-CL')}</h4>
                {cart.length > 0 && (
                    <button className="btn btn-dark btn-lg" onClick={handleCheckout} disabled={!token}>Pagar</button>
                )}
            </div>
            {message && <div className="alert alert-success mt-3">{message}</div>}
        </div>
    );
};

export default Cart;
