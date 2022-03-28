import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
const Navbar = () => {
  const {openSidebar,closeSubmenu,openSubmenu} = useGlobalContext();
  // display on mouse hover
  const displaySubmenu = e => {
    const pageName = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right )/2; //centerX
    const bottom = tempBtn.bottom - 3; // lift submenu 3px
    openSubmenu(pageName,{center,bottom}); //2nd param is coord
  }
  const handleSubmenu = e => {
    // if this element not contains "link-btn" class, then close submenu.
    if (!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }
  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        {/* icon stripe */}
        <div className='nav-header'>
          <img src={logo} alt='stripe' className='nav-logo'/>
          <button className='btn toggle-btn' 
            onClick={openSidebar}>
            <FaBars />
            </button>
        </div>

        {/* Main menu */}
        <ul className='nav-links'>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className='link-btn' onMouseOver={displaySubmenu}>company</button>
          </li>
        </ul>

        {/* show / sign in sidebar */}
        <button className='btn signin-btn'>Sign in</button>

      </div>
    </nav>
  )
}

export default Navbar
