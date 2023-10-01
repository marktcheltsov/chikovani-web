import React from 'react'
import '../../styles/components/ui/menu-button.css'

const MenuButton = ({sliderMenuOpen, openSliderMenu}) => {
  return (
    <div className={`header__menu-burger ${sliderMenuOpen ? 'header__menu-burger_slider-opened' : ''}`} onClick={openSliderMenu}>
        <span className={`header__menu-burger-item ${sliderMenuOpen ? 'header__menu-burger-item_active' : ''}`}></span>
        <span className={`header__menu-burger-item ${sliderMenuOpen ? 'header__menu-burger-item_active' : ''}`}></span>
        <span className={`header__menu-burger-item ${sliderMenuOpen ? 'header__menu-burger-item_active' : ''}`}></span>
    </div>
  )
}

export default MenuButton