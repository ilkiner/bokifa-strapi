import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomaPage'
import LoginPage from './pages/LoginPage'
import Products from './pages/Products/Products'  
import CartPage from './pages/CartPage'

export const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <HomePage />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/products",
    element: (
      <Layout>
        <Products />
      </Layout>
    ),
  },
  {
    path: "/cart",
    element: (
      <Layout>
        <CartPage />
      </Layout>
    ),
  },
])