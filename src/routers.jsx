import { createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'  
import HomePage from './pages/HomaPage'            
import LoginPage from './pages/LoginPage'              

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
])