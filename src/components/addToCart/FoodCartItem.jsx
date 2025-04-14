import React, { useEffect, useState } from 'react';

const FoodApp = () => {
  const [cart, setCart] = useState([]);

  const foodItems = [
    { id: 1, name: "Pizza", description: "Cheesy delight", price: 10 },
    { id: 2, name: "Burger", description: "Juicy beef patty", price: 8 },
    { id: 3, name: "Sushi", description: "Fresh and healthy", price: 12 },
    { id: 4, name: "Pasta", description: "Italian classic", price: 9 },
  ];

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add item or increase quantity
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  // Decrease quantity or remove item
  const decreaseQty = (itemId) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const getTotalPrice = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
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

      <div className="mt-10">
  <h2 className="text-2xl font-bold mb-4">🛒 Cart</h2>

  {cart.length === 0 ? (
    <p>No items in cart.</p>
  ) : (
    <div className="space-y-4">
      <div className="max-h-64 overflow-y-auto space-y-4 pr-2">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-3 rounded"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p>Quantity: {item.quantity}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 py-1 text-sm bg-red-500 text-white rounded"
                >
                  ➖ Decrease
                </button>
                <button
                  onClick={() => addToCart(item)}
                  className="px-2 py-1 text-sm bg-green-500 text-white rounded"
                >
                  ➕ Add More
                </button>
              </div>
            </div>
            <p className="font-bold">${item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      <div className="text-right font-bold text-xl mt-2">
        Total: ${getTotalPrice()}
      </div>

      <div className="text-right mt-2">
        <button
          onClick={clearCart}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🗑️ Clear Cart
        </button>
      </div>
    </div>
  )}
</div>

    </div>
  );
};

export default FoodApp;
