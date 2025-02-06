import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../CartContext";

const Pizza = () => {
  const { id } = useParams();
  const { addToCart } = useCart(); 
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await response.json();
        setPizza(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
        setLoading(false);
      }
    };
    fetchPizza();
  }, [id]);

  if (loading) return <div>Cargando información de la pizza...</div>;

  if (!pizza) return <div>No se encontró la pizza.</div>;
  return (
    <div className="container my-4">
      <h1>{pizza.name}</h1>
      <img src={pizza.img} alt={pizza.name} className="img-fluid mb-3" />
      <h3>Precio: ${pizza.price}</h3>
      <p>{pizza.description}</p>
      <h4>Ingredientes:</h4>
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <button
        className="btn btn-primary mt-3"
        onClick={() => addToCart({ id: pizza.id, name: pizza.name, img: pizza.img, price: pizza.price })}
      >
        Añadir al carrito
      </button>
    </div>
  );
};

export default Pizza;
