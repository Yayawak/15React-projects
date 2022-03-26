import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
  // const [question,setQuestion] = useState(null);
  // const questionElements = data.map((qust) => {
  //   return <Question {...qust} key={qust.id}/>
    
  // })
  const [questions, setQuestions] = useState(data);
  const questionElements = questions.map((qust) => {
    return <Question {...qust} key={qust.id}/>
    
  })
  return (
    <main >
      <div className='container'>
        <h3>Questions And Answers About Login</h3>
        <section>
          {
            questionElements
          }
        </section>
      </div>
      
    </main>
  )
}

export default App;
