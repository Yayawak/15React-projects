import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);

  const fetchJobs = async () => {
    const resp = await fetch(url);
    const newJobs = await resp.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(()=> {
    fetchJobs();
  }, []);
  
  
  if(loading) {
    return (
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }
  //jobs exists after finished loading
  const {company,dates,duties,title} = jobs[index]
  return (
    <section className='section'>
      <div className='title'>
        <h2>expierence</h2>
        <div className='underline' />
      </div>

      <div className='jobs-center'>
        {/* btn-container */}
        {/* job info */}
        <article className='job-info'>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className='job-date'>{dates}</p>
          {duties.map((duty,ind) => {
            return <div className='job-desc' key={ind}>
              <FaAngleDoubleRight className='job-icon' />
              <p>{duty}</p>
            </div>
          })}
        </article>
      </div>
    </section>
  )
}

export default App
