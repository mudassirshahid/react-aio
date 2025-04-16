import React from 'react'
import Cards from '../components/ui/Cards'
import ApiData from '../components/api/ApiData'
import FormValidation from '../components/form/formValidation'
import CrudAxios from '../components/crud/CrudAxios'
import FoodApp from '../components/addToCart/FoodCartItem'
import CartDrawer from '../components/addToCart/CartDrawer'
import Slider from '../components/ui/Sliders/Slider'
import BrandLogoSlider from '../components/ui/Sliders/BrandLogo'
import Navbar from '../components/ui/Navbar/Navbar'
import HeroSection from '../components/ui/HeroSection'
import Diff from '../components/ui/DaisyUi/Diff'
import Tab from '../components/ui/DaisyUi/Tab'

const Home = () => {
  return (
    <>
    <div className='p-4'>
      <h1>Home</h1>
      <Cards name="Mudassir" title="Frontend Developer"/>
      {/* <ApiData/> */}
      {/* <FormValidation /> */}
      {/* <CrudAxios /> */}
      {/* <FoodApp /> */}
      {/* <CartDrawer /> */}
      {/* <Slider/> */}
      {/* <BrandLogoSlider/> */}
      {/* <Navbar/> */}
      {/* <HeroSection/> */}
      {/* <Diff/> */}
      {/* <Tab/> */}
    </div>
    
    </>
  )
}

export default Home
