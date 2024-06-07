import React, { useState } from 'react';
import Header from './components/Header';
import Products from './components/Products';
import './styles/App.css';
import { Product } from './services/api/productService';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const handleAddToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const handleRemoveFromCart = (product: Product) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== product.id));
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
      <Products onAddToCart={handleAddToCart} />
    </div>
  );
};

export default App;
