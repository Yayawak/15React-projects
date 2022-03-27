import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
import people from './data';
function App() {
  const [people, setPeople] = useState(data);
  // current index
  const [index, setIndex] = useState(0);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>
          Reviews
        </h2>
      </div>
      <div className='section-center'>
        {people.map((person,ind) => {
          const {id,image,name,title,quote} = person;
          // LOGIC
          let position = 'nextSlide'
          if(index === ind) position = 'activeSlide';
          else if (ind === index-1 || 
                  (index === 0 && ind === people.length-1)) {
            position = 'lastSlide';
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className='person-img'/>
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='quote'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}

        <button className='prev' onClick={() => setIndex(index-1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index+1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App;
