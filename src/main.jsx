import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import App from './App.jsx';
import { CartProvider } from './context/CartContext.jsx';
import { ToastProvider } from './context/ToastContext.jsx';
import { ScrollNavigationProvider } from './context/ScrollNavigationContext.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* reducedMotion="user" respects the OS "reduce motion" setting */}
      <MotionConfig reducedMotion="user">
        <ToastProvider>
          <CartProvider>
            <ScrollNavigationProvider>
              <App />
            </ScrollNavigationProvider>
          </CartProvider>
        </ToastProvider>
      </MotionConfig>
    </BrowserRouter>
  </React.StrictMode>,
);
