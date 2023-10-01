import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../../styles/components/ui/menu-link.css";

const MenuLink = ({title, href}) => {
    const location = useLocation()
    const isActive = location.pathname === href
  return (
    <div>
        <Link to={href} className={`menu-link ${isActive && 'menu-link_active'}`}>{title}</Link>
    </div>
  )
}

export default MenuLink