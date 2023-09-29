import React from 'react'
import "../styles/components/header.css";

const Header = () => {
  return (
    <header className='header'>
        <nav className='header__nav'>
            <ul className='header__nav-list'>
                <li className='header__nav-link'>Ивенты</li>
                <li className='header__nav-link'>Создать ивент</li>
                <li className='header__nav-link'></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header