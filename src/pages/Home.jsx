import React from 'react'
import Cards from '../components/ui/Cards'
import ApiData from '../components/api/ApiData'
import FormValidation from '../components/form/formValidation'
import CrudAxios from '../components/crud/CrudAxios'
import FoodApp from '../components/addToCart/FoodCartItem'

const Home = () => {
  return (
    <>
    <div className='p-4'>
      Home
      <Cards name="Mudassir" title="Frontend Developer"/>
      {/* <ApiData/> */}
      {/* <FormValidation /> */}
      {/* <CrudAxios /> */}
      <FoodApp />
    </div>
    
    </>
  )
}

export default Home
