import React from 'react';
import cartIcon from '../assets/cart-icon.svg';
import '../styles/Header.css';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='logo-content'>
          <h1>Mks Desenvolvimento</h1>
          <img src={cartIcon} alt="Cart Icon" className="icon" />
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