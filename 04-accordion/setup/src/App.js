import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const [question,setQuestion] = useState(null);


  const questionElements = data.map((qust) => {
    return <Question {...qust} key={qust.id}/>
    
  })
  return (
    <main className='container'>
      <section className=''>
        <h3>Questions And Answers About Login</h3>
      </section>
      <section className=''>
        {questionElements}
      </section>
    </main>
  )
}

export default App;
