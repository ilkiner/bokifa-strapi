import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryProviders } from './providers/QueryProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryProviders>
      <App />
    </QueryProviders>
  </StrictMode>,
)