import React, { useState } from 'react';

// Simulamos carrito de compra
const initialCart = [
    {
        id: "P001",
        name: "Napolitana",
        price: 5950,
        count: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c", // Imagen de la pizza
    },
    {
        id: "P002",
        name: "Española",
        price: 7250,
        count: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
    },
    {
        id: "P003",
        name: "Salame",
        price: 5990,
        count: 1,
        img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2",
    },
];

const Cart = () => {
    //Para guardar el carrito y se inicialice con el initialCart
    const [cart, setCart] = useState(initialCart);

    // Aumentar cantidades de porductos en este caso pizza
    const increaseCount = (id) => {
        setCart(
            cart.map(item =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    // Para disminuir la cantidad de una pizza en el carrito (mínimo 1)
    const decreaseCount = (id) => {
        setCart(
            cart.map(item =>
                item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
            )
        );
    };

    // Cálculo del total: suma del precio de cada pizza multiplicado por su cantidad
    const total = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <div className="container my-5">
            <h3 className="mb-4">Detalles del pedido:</h3>
            <table className="table align-middle">
                <thead>
                    <tr>
                        <th style={{ width: "15%" }}>Imagen</th>
                        <th style={{ width: "35%" }}>Producto</th>
                        <th style={{ width: "20%" }}>Precio</th>
                        <th style={{ width: "20%" }}>Cantidad</th>
                        <th style={{ width: "10%" }}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Recorre el array del carrito y genera una fila (<tr>) por cada pizza */}
                    {cart.map((item) => (
                        <tr key={item.id}>
                            <td>
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="img-fluid rounded"
                                    style={{ maxWidth: "70px" }}
                                />
                            </td>

                            <td className="fw-bold">{item.name}</td>

                            <td>${item.price.toLocaleString('es-CL')}</td>

                            <td>
                                <div className="d-flex align-items-center justify-content-center">
                                    <button
                                        className="btn btn-outline-danger btn-sm me-2"
                                        onClick={() => decreaseCount(item.id)}
                                    >
                                        -
                                    </button>
                                    <span className="fw-bold">{item.count}</span>
                                    <button
                                        className="btn btn-outline-primary btn-sm ms-2"
                                        onClick={() => increaseCount(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </td>
                            <td>${(item.price * item.count).toLocaleString('es-CL')}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="d-flex justify-content-between align-items-center mt-4">
                <h4 className="fw-bold">Total: ${total.toLocaleString('es-CL')}</h4>
                <button className="btn btn-dark btn-lg">Pagar</button>
            </div>
        </div>
    );
};

export default Cart;

