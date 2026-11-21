import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactoPage from './pages/ContactoPage';
import WishlistPage from './pages/WishlistPage';

export default function App() {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const handleRemoveItem = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleAddToWishlist = (product) => {
    if (!wishlist.some(item => item.id === product.id)) {
      setWishlist(prev => [...prev, product]);
    }
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.precio, 0);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0b0f17] flex flex-col justify-between">
        <Navbar 
          cartCount={cart.length} 
          cartTotal={cartTotal} 
          wishlistCount={wishlist.length} 
        />
        
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<Home onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />} 
            />
            <Route 
              path="/producto/:id" 
              element={<ProductDetail onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} />} 
            />
            <Route 
              path="/carrito" 
              element={
                <CartPage 
                  cartItems={cart} 
                  onRemoveItem={handleRemoveItem} 
                  onClearCart={handleClearCart} 
                />
              } 
            />
            <Route 
              path="/checkout" 
              element={
                <CheckoutPage 
                  cartItems={cart} 
                  onClearCart={handleClearCart} 
                />
              } 
            />
            <Route path="/contacto" element={<ContactoPage />} />
            <Route 
              path="/favoritos" 
              element={
                <WishlistPage 
                  wishlistItems={wishlist} 
                  onRemoveFromWishlist={handleRemoveFromWishlist} 
                  onAddToCart={handleAddToCart} 
                />
              } 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}