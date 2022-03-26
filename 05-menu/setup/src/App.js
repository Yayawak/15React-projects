import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Set will automaticall eliminate same value
const allCategories = ['all', ...new Set(items.map((item) => item.category))] 

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (categorie) => {
    if(categorie=== 'all'){
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === categorie);
    setMenuItems(newItems);
  }
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline' />
        </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems}/>
      </section>
      
    </main>
  )
}

export default App;
