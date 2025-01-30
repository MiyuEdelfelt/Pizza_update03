import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas"); //Se utiliza el endpoint entregado del desafío
        const data = await response.json();
        setPizzas(data);
        setLoading(false);
      } catch (error) {
        console.error("Error al obtener las pizzas:", error);
        setLoading(false);
      }
    };
    fetchPizzas();
  }, []);

  if (loading) return <div>Cargando pizzas...</div>;

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
                id={pizza.id}   
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
