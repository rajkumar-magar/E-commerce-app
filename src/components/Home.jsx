import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Products from "./Products";
import FeatureInfo from "./FeatureInfo";

const Home = () => {

    const [products, setProducts] =  useState([])

    useEffect(() => {
     const fetchProducts = async() =>{
        const response = await fetch('https://fakestoreapi.com/products?limit=16')
        const data = await response.json()
        setProducts(data)
        
     }
     fetchProducts()
    }, [])
    

  return (
    <>
    <Hero />
    <h1 className="text-center font-bold mx-auto text-4xl">Products</h1>
    {
        products.length > 0 ?<Products products={products}/> : <div> Fetching Products...</div>
    }
    <Products />
    <FeatureInfo />
    </>
  );
};

export default Home;
