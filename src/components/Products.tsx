import React, { useEffect, useState } from "react";
import searchIcon from "../assets/search-icon.svg";
import arrowUpIcon from "../assets/arrow-up-icon.svg";
import arrowDownIcon from "../assets/arrow-down-icon.svg";
import Card from "./Card";
import Footer from "./Footer";
import { Product, getProducts, OrderBy } from "../services/api/productService";
import "../styles/Products.css";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [orderBy, setOrderBy] = useState<OrderBy>("ASC");
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const fetchProductsAndSetState = async () => {
      try {
        const data = await getProducts(orderBy);
        let filteredProducts = data.products;
        if (searchValue) {
          filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchValue.toLowerCase())
          );
        }
        setProducts(filteredProducts);
        setTotalResults(filteredProducts.length);
      } catch (error: any) {
        console.error("Error fetching products:", error);
        throw error;
      }
    };
  
    fetchProductsAndSetState();
  }, [orderBy, searchValue]);

  const toggleOrderBy = () => {
    const newOrderBy = orderBy === "ASC" ? "DESC" : "ASC";
    setOrderBy(newOrderBy);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  return (
    <main>
      <div className="input-container">
        <img src={searchIcon} alt="Search Icon" className="icon" />
        <input
          type="text"
          placeholder="Procure por produtos"
          value={searchValue}
          onChange={handleSearchInputChange}
        ></input>
      </div>
      <div className="main-top-line"></div>
      <div className="products-container">
        <span className="result">{totalResults} resultados encontrados</span>
        <div className="order-container" onClick={toggleOrderBy}>
          <span className="order">
            ORDENAR POR: {orderBy === "ASC" ? "CRESCENTE" : "DECRESCENTE"}
          </span>
          <img
            src={orderBy === "ASC" ? arrowUpIcon : arrowDownIcon}
            alt="Arrow Icon"
            className="icon"
          />
        </div>
      </div>
      <div className="cards-container">
        {products.map((product) => (
          <Card
            key={product.id}
            product={{
              name: product.name,
              brand: product.brand,
              photo: product.photo,
              price: product.price,
            }}
          />
        ))}
      </div>
      <div className="main-bottom-line"></div>
      <Footer />
    </main>
  );
};

export default Products;
