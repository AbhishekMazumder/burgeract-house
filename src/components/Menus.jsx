import React from 'react'
import MenuItem from './MenuItem'
import mImage1 from "../images/s1.png"
import mImage2 from "../images/s2.png"

const Menus = () => {
  return (
    <div id="products">
      <h1>Choose & Enjoy</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo impedit consequatur error magnam, voluptatem.</p>
      <div className="a-container">
        <MenuItem image={mImage1} title="Luger Burger" />
        <MenuItem image={mImage2} title="Le Pegion Burger" />
        <MenuItem image={mImage1} title="Jumbo Burger" />
      </div>
    </div>
  )
}

export default Menus
