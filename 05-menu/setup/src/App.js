import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState([]);

  const menuElements = menuItems.map((menu) => {
    return (
      <Menu {...menu} key={menu.id} />
    )
  })
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline' />
        </div>
      <Categories />
      
      </section>
      <section  className='section-center'>
        {menuElements}
      </section>
    </main>
  )
}

export default App;
