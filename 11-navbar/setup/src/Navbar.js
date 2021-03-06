import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [showLinks,setShowLinks] = useState(false);
  // useRef will not auto refresh Component like useState.
  const linksContainerRef = useRef(null); // for div
  const linksRef = useRef(null); //before the list
  
  // Dynamic Height of List tab
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight)
    if(showLinks) {
      // useRef use to store data, It can be used to access a DOM element directly.
      // the same as <div style={{height: num}}><div/>
      linksContainerRef.current.style.height = `${linksHeight}px`
    }else{
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button 
            className='nav-toggle' 
            onClick={()=>setShowLinks(!showLinks)}>
            <FaBars />
          </button>
          
        </div>

        
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>  
            {
              links.map((link) => {
                const {id,url,text} = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        
        <ul className='social-icons'>
            {
              social.map(socialIcon => {
                const {id,url,icon} = socialIcon;
                return (
                  <li key={id}>
                    <a href={url}>{icon}</a>
                  </li>
                )
              })
            }
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
