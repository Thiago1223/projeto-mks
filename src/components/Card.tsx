import React from "react";
import cartIcon from "../assets/cart-add-icon.svg";
import "../styles/Card.css";
import { Product } from '../services/api/productService';

interface CardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const Card: React.FC<CardProps> = ({ product, onAddToCart }) => {
  const { brand, name, price, photo } = product;

  return (
    <div className="card">
      <img
        src={cartIcon}
        alt="Cart Icon"
        className="icon-cart"
        onClick={() => onAddToCart(product)}
      />
      <img src={photo} alt="Product" className="product" />
      <div className="card-container">
        <span className="brand">{brand}</span>
        <h1>{name}</h1>
        <span className="price">$ {price}</span>
      </div>
    </div>
  );
};

export default Card;
