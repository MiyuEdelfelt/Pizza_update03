import React from 'react';
import headerImage from '../assets/Header.jpg';

const Header = () => {
  return (
    <header
      className="bg-dark text-light text-center py-5 d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: `url(${headerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
      }}
    >
      <div className="container">
        <h1 className="display-4 fw-bold">¡Pizzería Mamma Mia!</h1>
        <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
      </div>
    </header>
  );
};

export default Header;
