import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import { useThemeContext } from './context/ThemeContext'

const Layout = () => {
  const {theme,toggleTheme} = useThemeContext()
  return (
    <>
    <main className={`${theme ? 'bg-black text-white' : 'bg-white'}`}>
      <Header/>
      <Outlet/>
      <Footer/>
      </main>
    </>
  )
}

export default Layout
