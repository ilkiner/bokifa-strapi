import React, { useContext } from 'react';
import { CartContext } from './../../pages/CartContext/index.jsx';

const CartPage = () => {
    const { cart, removeFromCart, clearCart } = useContext(CartContext);
  
    if (cart.length === 0) {
      return <p>Your cart is empty.</p>;
    }
  
    return (
      <div className=' flex flex-col items-start justify-center p-4'>
        <h2 className='text-xl text-green-500 font-semibold'>Your Cart</h2>
        <ul className='grid grid-cols-3 gap-2'>
          {cart.map(product => (
            <li key={product.id}>
              <img src={`http://localhost:1337${product.image.url}`} alt={product.name} style={{ width: '150px', height: '150px' }} />
              {product.name} - ${product.price}
              <button className='ml-2 p-3 text-red-600 font-semibold' onClick={() => removeFromCart(product.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
        <button className='text-xl text-green-500 font-semibold hover:text-green-700' onClick={clearCart}>Clear Cart</button>
      </div>
    );
  };
  
  export default CartPage;