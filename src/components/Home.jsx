import React, { useEffect, useState } from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]); // Estado para almacenar las pizzas
  const [loading, setLoading] = useState(true); // Para controlar el estado de carga

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        const data = await response.json();
        setPizzas(data); // Guarda las pizzas en el estado
        setLoading(false); // Desactiva el estado de carga
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
        setLoading(false);
      }
    };
    fetchPizzas();
  }, []);

  if (loading) return <div>Cargando pizzas...</div>; // Muestra un mensaje mientras carga

  return (
    <>
      <div className="position-relative" style={{ marginTop: "-1px" }}>
        <Header />
      </div>
      <div className="container my-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.id}>
              <CardPizza
                name={pizza.name}
                img={pizza.img}
                ingredients={pizza.ingredients}
                price={pizza.price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
