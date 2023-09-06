import React from 'react';

export const Categories = ({ menuCategories, filterItems }) => {
  return (
    <div className="btn-container">
      {menuCategories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
            key={category}
            onClick={() => filterItems(category)}
          >
              {category}
          </button>
        )
      })}

    </div>
  )
}
