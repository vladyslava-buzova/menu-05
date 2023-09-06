import React from 'react'
import MenuItem from './menuItems'

const Menu = ({menuItem}) => {
  return (
    <div className='section-center'>
      {menuItem.map((item) => {
        return <MenuItem key={item.id} {...item}/>
      })}
    </div>
  )
}

export default Menu