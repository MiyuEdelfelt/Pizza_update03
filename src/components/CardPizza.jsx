import React from 'react';

const CardPizza = ({ name, img, ingredients, price }) => {
  return (
    <div className="card shadow-sm h-100" style={{ borderRadius: '10px' }}>
      <img
        src={img}
        className="card-img-top"
        alt={`Imagen de ${name}`}
        style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-dark fw-bold mb-3">
          Pizza {name}
        </h5>
        <p className="card-text text-center mb-3">
          <strong>Ingredientes:</strong>
        </p>
        <ul className="list-unstyled">
          {ingredients.map((ingredient, idx) => (
            <li key={idx}>🍕 {ingredient}</li>
          ))}
        </ul>
        <p className="card-text text-center fw-bold fs-5 text-dark">
          Precio: ${price.toLocaleString('es-CL')}
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
  );
};

export default CardPizza;
