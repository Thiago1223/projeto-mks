import React, { useState, useEffect } from 'react';
import arrowUpIcon from "../assets/arrow-up-icon.svg";
import arrowDownIcon from "../assets/arrow-down-icon.svg";
import '../styles/Cart.css';
import { Product } from '../services/api/productService';

interface CartProps {
  cartItems: Product[];
  onRemove: (product: Product) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemove }) => {
  const [itemQuantities, setItemQuantities] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const initialQuantities: { [key: string]: number } = {};
    cartItems.forEach(item => {
      initialQuantities[item.id] = 1;
    });
    setItemQuantities(initialQuantities);
  }, [cartItems]);

  const handleCartClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleQuantityChange = (itemId: string, quantity: number) => {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: Math.max(1, quantity)
    }));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach(item => {
      totalPrice += (parseFloat(item.price) * (itemQuantities[item.id] || 0));
    });
    return totalPrice;
  };

  return (
    <div className="cart-modal" onClick={handleCartClick}>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p>Você ainda não realizou nenhuma compra!</p>
        </div>
      ) : (
        <div>
          <div className='cart-header'>
            <span>Item</span>
            <span>Preço</span>
            <span>Quantidade</span>
          </div>
          <div className='cart-header-line'></div>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-details">
                <img src={item.photo} alt={item.name} className="cart-item-photo" />
                <span className='cart-item-name'>{item.name}</span>
              </div>
              <span className='cart-item-price'>R$ {parseFloat(item.price) * (itemQuantities[item.id] || 0)}</span>
              <div className='cart-item-container'>
                <div className='cart-item-amount'>
                  <img
                    src={arrowUpIcon}
                    alt="Arrow Up Icon"
                    className='arrow-icon'
                    onClick={() => handleQuantityChange(String(item.id), (itemQuantities[item.id] || 0) + 1)}
                  />
                  <span>{itemQuantities[item.id] || 1}</span>
                  <img
                    src={arrowDownIcon}
                    alt="Arrow Down Icon"
                    className='arrow-icon'
                    onClick={() => handleQuantityChange(String(item.id), Math.max(0, (itemQuantities[item.id] || 0) - 1))}
                  />
                </div>
                <button onClick={() => onRemove(item)} className="remove-button">Remove</button>
              </div>
            </div>
          ))}
          <div className='cart-purchase'>
            <span className='cart-purchase-total'>Total: R$ {calculateTotalPrice()}</span>
            <button className="finalize-button">Finalizar Compra</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
