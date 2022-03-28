import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
// submenu appear when hover 
const Submenu = () => {
  const {isSubmenuOpen, location} = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenuElement = container.current;
    const {center,bottom} = location;
    submenuElement.style.left = `${center}px`
    submenuElement.style.top = `${bottom}px`
  }, [location])
  return (
    // aside tag is used when it's minor content or it's submenu
    <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`}
      ref={container}>
        subMenu
    </aside>
  )
}

export default Submenu
