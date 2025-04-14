import React from 'react'
import { useThemeContext } from '../context/ThemeContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const {theme,toggleTheme} = useThemeContext()
  return (
    <>
    <div className='flex justify-between items-center p-4 bg-emerald-500'>
      <div className='text-center'><Link to={'/'}>Header</Link></div>
      {/* For Routing Page  */}
      <nav>
        <ul className='flex gap-5'>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/user'}>User</Link></li>
          <li><Link to={'/profile'}>Profile</Link></li>
        </ul>
      </nav>
      {/* For Landing Page  */}
      {/* <nav>
        <ul className='flex gap-5'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#user'>User</a></li>
          <li><a href='#profile'>Profile</a></li>
        </ul>
      </nav> */}
      <button onClick={toggleTheme}>{`${theme ? 'Light mode' : 'Dark mode'}`}</button>
      </div>
    </>
  )
}

export default Header
