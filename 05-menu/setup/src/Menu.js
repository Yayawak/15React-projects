import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
const Menu = ({ title, price, img, desc }) => {
  return (
    <div>
      <div className='menu-item'>
        <img src={img} alt={title} className='photo' />
      </div>
      <div className='menu-item'>
        <section className='item-info'>
          <header>
            <h4>{title}</h4>
            <h4 className='price'>${price}</h4>
          </header>
          <p className='item-text'>
            {desc}
          </p>
        </section>
      </div>
    </div>
  )
};

export default Menu;
