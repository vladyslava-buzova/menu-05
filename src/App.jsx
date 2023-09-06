import { useState } from 'react';
import Title from './title';
import Menu from './menu';
import menu from './data';
import { Categories } from './categories';

const menuCat = menu.map((item) => item.category);
const categoriesSet = new Set(menuCat);
const allCategories = ['all', ...categoriesSet]

// other wat to to make a sat
// const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [menuItem, setMenuItem] = useState(menu);
  const [menuCategories, setMenuCategories] = useState(allCategories);
  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItem(menu);
      return;
    }

    const newItems = menu.filter((item) => item.category === category)
    setMenuItem(newItems);
  }

  return (
    <main>
      <section className="menu">
        <Title text='our menu'/>
        <Categories
          menuCategories={menuCategories}
          filterItems={filterItems}
        />
        <Menu menuItem={menuItem}/>
      </section>
    </main>
  )
};
export default App;
