import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  //this is array of every paragraph
  const [text, setText] = useState([]);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);
    if(count <=0) amount = 1; else if (count>data.length) amount =data.length;
    setText(data.slice(0, amount));
  }
  return (
    <section className='section-center'>
      <h3>Tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          paragraphs:
        </label>
        <input type='number' name='amount' id='amount' 
          onChange={(e)=>setCount(e.target.value)} value={count}/>
        <button type='submit' className='btn'>generate</button>
      </form>
      <article className='lorem-text'>
        {text.map((item,ind) => {
          return (
            <p key={ind} >
              {item}
            </p>
          )
        })}
      </article>
    </section>
    )
}

export default App;
