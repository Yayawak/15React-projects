import React, { useState } from 'react'
import SingleColor from './SingleColor'
import Values from 'values.js'

function App() {
  const [color, setColor ] = useState('');
  const [isError, setIsError] = useState(false);
  // const [freq, setFreq] = useState(20);
  const [list, setList] = useState(new Values('#f1ff25').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      // console.log(colors)
      setList(colors)
    } 
    catch(error) {
      setIsError(true);
      // alert(error);
      console.error(error)
    }
  }
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input type='text' value={color} 
            onChange={(e) => setColor(e.target.value) } 
            placeholder="#f15025"
            className={`${isError ? 'error' : null}`} />
          <button className='btn' type='submit'>submit</button>
        </form>
        {/* <form>
          <input type='number' value={freq} 
            onChange={(e) => {
              parseInt(setFreq(e.target.value))
              setList(new Values(color).all(freq))
            }} 
            placeholder={freq}
            className='' />
        </form> */}
      </section>

      <section className='colors'>
      {list.map((_color,ind) => {
          // console.log(_color)

          return(
            <SingleColor key={ind} {..._color} index={ind} hexColor={_color.hex} />
          )
        })}
      </section>
    </>
    
  )
}

export default App
