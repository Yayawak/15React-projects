import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'
// go go go 
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar} = useGlobalContext();
  return (
    <aside className={`${isSidebarOpen?'sidebar show-sidebar':'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
        <button className='close-btn'
          onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {
          links.map(link => {
            const {id,url,text,icon} = link;
            return (
              <li key={id}>
                <a href={url}>
                  {icon}
                  {text}
                </a>
              </li>
            )
          })
        }
      </ul>
      <ul className='social-icons'>
        {
          social.map(soc => {
            const {id,url,icon} = soc;
            return (
              <li key={id}>
                <a href={url}>
                  {/* this icon is React-icon not just simple image */}
                  {icon} 
                </a>
              </li>
            )
          })
        }
      </ul>
    </aside>
  )
}

export default Sidebar
