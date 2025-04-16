import React from 'react';
import { useThemeContext } from '../context/ThemeContext';
import { useCart } from '../context/CartContext'; // 👈 import cart context
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  const { cart, setIsCartOpen } = useCart(); // 👈 use cart state
  const totalQty = cart.reduce((sum, item) => sum + item.quantity, 0); // 👈 total items

  return (
    <>
      <div className='flex justify-between items-center p-4 bg-emerald-500 text-white'>
        <div className='text-xl font-bold'><Link to={'/'}>Header</Link></div>

        <nav>
          <ul className='flex gap-5'>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/about'}>About</Link></li>
            <li><Link to={'/user'}>User</Link></li>
            <li><Link to={'/profile'}>Profile</Link></li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button onClick={toggleTheme}>
            {theme ? 'Light mode' : 'Dark mode'}
          </button>

          {/* 🛒 Cart Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative px-4 py-2 bg-white text-black rounded shadow hover:bg-gray-100"
          >
            🛒
            {totalQty > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
