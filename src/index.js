import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import ProductProvider from './contexts/ProductContext';
import SidebarProvider from './contexts/SidebarContext';
import CartProvider from './contexts/CartContext';
import DiscountProvider from "./contexts/DiscountContext";
import SearchProvider from './contexts/SearchContext';
import HeartProvider from './contexts/HeartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <HeartProvider>
  <SearchProvider>
  <DiscountProvider>
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
        </ProductProvider>
      </CartProvider>      
    </SidebarProvider>  
    </DiscountProvider>
    </SearchProvider>
    </HeartProvider>
);
