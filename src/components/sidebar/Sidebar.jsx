import React from 'react'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  return (
    <section>
      <div><h4>CATEGORY</h4></div>
      <nav>
      <ul>
        <li>
        <NavLink to={`/categories/${1}`} >Link</NavLink>
        </li>
      </ul>
        
      </nav>

    </section>
  )
}

export default Sidebar