import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useThemeContext } from '../../context/ThemeContext';
import { useCart } from '../../context/CartContext';

const FoodApp = () => {
  const { theme } = useThemeContext();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    addToCart,
    decreaseQty,
    clearCart,
    totalPrice,
  } = useCart();

  const foodItems = [
    { id: 1, name: "Pizza", description: "Cheesy delight", price: 10 },
    { id: 2, name: "Burger", description: "Juicy beef patty", price: 8 },
    { id: 3, name: "Sushi", description: "Fresh and healthy", price: 12 },
    { id: 4, name: "Pasta", description: "Italian classic", price: 9 },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Toaster position="top-right" />
      <h1 className="text-3xl font-bold mb-6">🍽️ Food Menu</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {foodItems.map((food) => (
          <div key={food.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{food.name}</h2>
            <p>{food.description}</p>
            <p className="font-bold mt-1">${food.price}</p>
            <button
              onClick={() => addToCart(food)}
              className="mt-3 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Button for Mobile (optional, since Header has it too) */}
      {/* <button
        onClick={() => setIsCartOpen(true)}
        className="block md:hidden fixed top-4 right-4 bg-black text-white p-3 rounded-full shadow-lg z-50"
      >
        🛒
      </button> */}

      {/* Cart Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 shadow-lg border-l transform transition-transform duration-300 z-40 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        } ${theme ? 'bg-black text-white' : 'bg-white text-black'}`}
      >
        <div className="p-4 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">🛒 Cart</h2>
            <button onClick={() => setIsCartOpen(false)}>❌</button>
          </div>

          {cart.length === 0 ? (
            <p className="text-gray-500">Cart is empty</p>
          ) : (
            <div className="flex-1 overflow-y-auto pr-2 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="border p-3 rounded flex justify-between items-center"
                >
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p>Qty: {item.quantity}</p>
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-2 py-1 text-sm bg-red-500 text-white rounded"
                      >
                        ➖
                      </button>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-2 py-1 text-sm bg-green-500 text-white rounded"
                      >
                        ➕
                      </button>
                    </div>
                  </div>
                  <p className="font-bold">${item.price * item.quantity}</p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-4">
            <div className="font-bold text-right">Total: ${totalPrice}</div>
            <button
              onClick={clearCart}
              className="mt-2 w-full bg-red-600 text-white py-2 rounded"
            >
              🗑️ Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodApp;
