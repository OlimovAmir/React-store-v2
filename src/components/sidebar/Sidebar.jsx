import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss';

function Sidebar() {
  return (
    <section className={styles.section}>
      <div><h4>CATEGORY</h4></div>
      <nav>
      <ul>
        <li>
        <NavLink to={`/categories/${1}`} className={styles.test} >Link</NavLink>
        </li>
      </ul>
        
      </nav>

    </section>
  )
}

export default Sidebar