import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';
import { pizzas } from '../js/pizzas';

const Home = () => {
  return (
    <>
      <div className="position-relative" style={{ marginTop: '-1px' }}>
        <Header />
      </div>
      <div className="container my-4">
        <div className="row">
          {pizzas.map((pizza) => (
            <div className="col-md-4 mb-4" key={pizza.name}>
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
