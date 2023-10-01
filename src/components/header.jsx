import "../styles/components/header.css";
import Logo from './ui/logo';
import MenuButton from './ui/menu-button';

const Header = ({sliderMenuOpen, openSliderMenu}) => {

  return (
    <header className='header'>
      <Logo/>
      <MenuButton openSliderMenu={openSliderMenu} sliderMenuOpen={sliderMenuOpen}/>
    </header>
  )
}

export default Header