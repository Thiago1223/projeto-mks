import React from 'react';
import cartIcon from '../assets/cart-icon.svg';
import Cart from './Cart';
import '../styles/Header.css';
import { Product } from '../services/api/productService';

interface HeaderProps {
  cartItems: Product[];
  onRemoveFromCart: (product: Product) => void;
}

const Header: React.FC<HeaderProps> = ({ cartItems, onRemoveFromCart }) => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header className='header'>
      <div className='header-content'>
        <div className='logo-content'>
          <h1>Mks Desenvolvimento</h1>
          <div className='cart-icon-container' onClick={handleCartClick}>
            <img src={cartIcon} alt="Cart Icon" className="icon" />
            {isCartOpen && (
              <Cart cartItems={cartItems} onRemove={onRemoveFromCart} />
            )}
          </div>
        </div>
      </div>
      <div className='header-banner'>
        <div className="banner-text">
          <span>Produtos</span>
          <p>Escolha entre celulares de última geração, teclados mecânicos e mouses ergonômicos, projetados para melhorar sua produtividade e entretenimento.</p>
        </div>
      </div>
      <div className="header-bottom-line"></div>
    </header>
  );
}

export default Header;
