import { createContext, useState, useContext } from "react";

const CartContext = createContext();

// Hook para usar el context
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Para el estado del carrito 

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        setCart((prevCart) => {
            // Verificamos si el producto ya está en el carrito usando la id 
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                // Si ya existe se irá aumentando
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                );
            }
            // Si el producto no está en el carrito, lo agregamos usando el count = 1
            return [...prevCart, { ...product, count: 1 }];
        });
    };

    //Para eliminar producto del carrito 
    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    // Para aumentar la cantidad (intento 2)
    const increaseCount = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, count: item.count + 1 } : item
            )
        );
    };
 
    // Disminuir cantidad (sin eliminar todo) 
    const decreaseCount = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.count > 1 ? { ...item, count: item.count - 1 } : item
            )
        );
    };

    // Se calcula el total 
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.count, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increaseCount, decreaseCount, totalPrice }}>
            {children}
        </CartContext.Provider>
    );
};
