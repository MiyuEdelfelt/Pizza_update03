import React from 'react';

const pizzas = [
  {
    name: "Napolitana",
    price: 5950,
    ingredients: ["mozzarella", "tomates", "jamón", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
  },
  {
    name: "Española",
    price: 6950,
    ingredients: ["mozzarella", "gorgonzola", "parmesano", "provolone"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
  },
  {
    name: "Pepperoni",
    price: 6950,
    ingredients: ["mozzarella", "pepperoni", "orégano"],
    img: "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
  },
];

const CardPizza = () => {
  return (
    <div className="row">
      {pizzas.map((pizza, index) => (
        <div key={index} className="col-md-4 mb-4">
          <div className="card shadow-sm h-100" style={{ borderRadius: '10px' }}>
            <img
              src={pizza.img}
              className="card-img-top"
              alt={`Imagen de ${pizza.name}`}
              style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title text-dark fw-bold mb-3">
                Pizza {pizza.name}
              </h5>
              <hr />  {/*Linea de espacios*/}
              <p className="card-text text-center mb-3">
                <strong>Ingredientes:</strong> <br />
                <span className="text-muted">
                  🍕 {pizza.ingredients.join(', ')}
                </span>
              </p>
              <hr />
              <p className="card-text text-center fw-bold fs-5 text-dark">
                Precio: ${pizza.price.toLocaleString('es-CL')}
              </p>
              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-outline-secondary">
                  Ver Más <i className="bi bi-eye-fill"></i>
                </button>
                <button className="btn btn-dark">
                  Añadir <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPizza;
