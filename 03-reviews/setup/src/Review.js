import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const {name,job,image,text} = people[index];

  // actually check index of each people
  const checkIndex = ind => {
    if (ind > people.length - 1) return 0;
    else if ( ind < 0 ) return people.length - 1 ;
    return ind
  }
  const nextPerson = () => {
    setIndex((_index) => {
      let newIndex = _index + 1;
      return checkIndex(newIndex);
    })
  }
  const prevPerson = () => {
    setIndex((_index) => {
      let newIndex = _index - 1;
      return checkIndex(newIndex);
    })
  }

  const randomPerson = () => {
    let randIndx = Math.floor(Math.random() * people.length);
    // prevents from random into same index.
    if (randIndx === index){
      randIndx = index + 1;
    }
    setIndex(checkIndex(randIndx))
  }
  
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} 
          className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container' >
        <button 
          className='prev-btn'
          onClick={prevPerson}
          >
          <FaChevronLeft />
        </button>
        <button 
          className='next-btn'
          onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button 
        className='random-btn' onClick={randomPerson}>
        random
      </button>
    </article>
  )
};

export default Review;
