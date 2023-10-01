import React from 'react'
import '../../styles/components/ui/menu.css'
import MenuLink from './menu-link'
import { links } from '../../utils/links-date'

const Menu = ({ isOpen }) => {

  return (
    <div className={`slide-in-panel ${isOpen ? 'open' : ''}`}>
        <div className="overlay">
            <div className='links-container'>
                {links.map((i)=> (
                    <MenuLink key={i.href} title={i.title} href={i.href}></MenuLink>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Menu