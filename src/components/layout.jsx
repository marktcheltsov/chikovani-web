import { useState } from 'react'
import Header from './header'
import Menu from './ui/menu';

const Layout = ({children}) => {
  const [sliderMenuOpen, setSliderMenuOpen] = useState(false);

  function openSliderMenu() {
    setSliderMenuOpen(!sliderMenuOpen)
  }
  return (
    <>
        <Header openSliderMenu={ openSliderMenu } sliderMenuOpen={ sliderMenuOpen }></Header>
        <Menu isOpen={sliderMenuOpen}/>
        <main>
            {children}
        </main>
    </>
  )
}

export default Layout