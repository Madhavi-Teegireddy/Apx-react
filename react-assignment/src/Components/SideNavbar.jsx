import React from 'react'
import { NavLink } from 'react-router-dom'
import style from  "../Styles/navbar.module.css"

const SideNavbar = () => { 
  return (
    <div className={style.navbar}>
        <NavLink to="/" className={style.options}>Home</NavLink>
        <NavLink to="/addscenerio" className={style.options}>Add Scenerio</NavLink>
        <NavLink to="/allscenerios" className={style.options}>All Scenerio</NavLink>
        <NavLink to="/addvehicle" className={style.options}>Add Vehicle</NavLink>
    </div>
  )
}

export default SideNavbar