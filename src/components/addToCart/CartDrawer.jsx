import { useCart } from '../../context/CartContext';
import { useThemeContext } from '../../context/ThemeContext';

const CartDrawer = () => {
  const { cart, isCartOpen, setIsCartOpen, decreaseQty, addToCart, clearCart, getTotalPrice } = useCart();
  const { theme } = useThemeContext()

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 shadow-lg border-l transform transition-transform duration-300 z-40 ${
        isCartOpen ? 'translate-x-0' : 'translate-x-full'
      } ${theme ? 'text-white bg-black' : 'text-black bg-white'}`}
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
          <div className="font-bold text-right">
            Total: ${getTotalPrice()}
          </div>
          <button
            onClick={clearCart}
            className="mt-2 w-full bg-red-600 text-white py-2 rounded"
          >
            🗑️ Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
