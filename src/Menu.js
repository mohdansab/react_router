import React from 'react'
import { Outlet } from 'react-router-dom'

function Menu() {
  return (
    <div>
      <ul>
        <li>COOL DRINKS</li>
        <li>ARABIAN FOOD</li>
        <li>CHINESE FOOD</li>
        <li>EVENING SNACKS</li>

      </ul>
      <Outlet/>
    </div>
  )
}

export default Menu
