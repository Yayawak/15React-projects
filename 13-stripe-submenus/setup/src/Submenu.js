import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'
// submenu appear when hover 
const Submenu = () => {
  const {isSubmenuOpen, location, page:{page, links}} = useGlobalContext();
  const container = useRef(null);
  const [columns, setColumns] = useState('col-2')
  useEffect(() => {
    const submenuElement = container.current;
    const {center,bottom} = location;
    submenuElement.style.left = `${center}px`;
    submenuElement.style.top = `${bottom}px`;

    setColumns('col-2')
    if (links.length === 3) setColumns('col-3');
    else if (links.length > 3) setColumns('col-4')
  }, [location, links])
  return (
    // aside tag is used when it's minor content or it's submenu
    <aside className={`${isSubmenuOpen?'submenu show':'submenu'}`}
      ref={container}>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`} >
          {
            links.map((link,index) => {
              const {label,icon,url} = link;
              return (
                <a href={url} key={index}>
                  {icon}
                  {label}
                </a>
              )
            })
          }
        </div>
    </aside>
  )
}

export default Submenu
