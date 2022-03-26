import React from 'react';

const Categories = () => {
  return (
    <div className='btn-container'>
      <button className='filter-btn' onClick={() => {
        
      }}>
        All
      </button>
      <button className='filter-btn'>
        Breakfast
      </button>
      <button className='filter-btn'>
        Lunch
      </button>
      <button className='filter-btn'>
        Shakes
      </button>
  </div>
  );
};

export default Categories;
