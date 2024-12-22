import React from 'react';
import Header from './Header';
import CardPizza from './CardPizza';

const Home = () => {
  return (
    <>
      <div className="position-relative" style={{ marginTop: '-1px' }}>
        <Header />
      </div>
      <div className="container my-4">
        <CardPizza />
      </div>
    </>
  );
};

export default Home;
