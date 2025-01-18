import React, { useEffect, useState } from "react";

const Pizza = () => {
  const [pizza, setPizza] = useState(null); // Estado para almacenar los datos de la pizza
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas/p001"); //Utilizamos el endpoint del desafío
        const data = await response.json();
        setPizza(data); 
        setLoading(false); 
      } catch (error) {
        console.error("Error al obtener la pizza:", error);
        setLoading(false);
      }
    };
    fetchPizza();
  }, []);

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
      <button className="btn btn-primary mt-3">Añadir al carrito</button>
    </div>
  );
};

export default Pizza;
