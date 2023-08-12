import React from "react";
import Products from "./Products";
import MainCategory from "./MainCategory";
import { useState, useEffect } from "react";

const ProductCategory = () => {
    const [products, setProducts] =  useState([])

    useEffect(() => {
     const fetchProducts = async() =>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
        
     }
     fetchProducts()
    }, [])

  return (
    <div>
      <MainCategory/>
      {
        products.length > 0 ?
        <Products products={products}/>
        :
        <div> Loading ...</div>
      }
      
    </div>
  );
};

export default ProductCategory;
