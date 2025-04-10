import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { Router } from './routers'  
import { CartProvider } from './pages/CartContext/index.jsx'
function App() {
  return (
    <CartProvider>
      <RouterProvider router={Router} />
    </CartProvider>
  );
}

export default App