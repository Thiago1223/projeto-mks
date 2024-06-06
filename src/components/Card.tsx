import React from 'react';
import product from '../assets/product.png';
import cartIcon from '../assets/cart-add-icon.svg';
import '../styles/Card.css';

const Card: React.FC = () => {
  return (
    <div className='card'>
        <img src={cartIcon} alt="Cart Icon" className="icon-cart" />
        <img src={product} alt="Product" className='product' />
        <div className='card-container'>
            <span className='brand'>HYPERX</span>
            <h1>WebCam C922 Pro Stream Logitech</h1>
            <span className='price'>$ 999.99</span>
        </div>
    </div>
  );
}

export default Card;