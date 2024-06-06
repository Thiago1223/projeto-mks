import React from 'react';
import searchIcon from '../assets/search-icon.svg';
import arrowIcon from '../assets/arrow-up-icon.svg';
import Card from './Card';
import Pages from './Pages';
import Footer from './Footer';
import '../styles/Products.css';

const Products: React.FC = () => {
  return (
    <main>
        <div className='input-container'>
            <img src={searchIcon} alt="Search Icon" className="icon" />
            <input type='text' placeholder='Procure por produtos'></input>
        </div>
        <div className='main-top-line'></div>
        <div className='products-container'>
            <span className='result'>Mais de 20 resultados</span>
            <div className='order-container'>
                <span className='order'>ORDENAR POR: DECRESCENTE</span>
                <img src={arrowIcon} alt="Arrow Up Icon" className="icon" />
            </div>
        </div>
        <div className='cards-container'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <Pages />
        <div className='main-bottom-line'></div>
        <Footer />
    </main>
  );
}

export default Products;