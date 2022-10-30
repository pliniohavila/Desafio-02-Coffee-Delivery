import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { CartContextProvider } from './contexts/CartContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  // </React.StrictMode>
)
