import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Products from "./Products";
import MainCategory from "./MainCategory";

const Home = () => {

    const [products, setProducts] =  useState([])

    useEffect(() => {
     const fetchProducts = async() =>{
        const response = await fetch('https://fakestoreapi.com/products?limit=12')
        const data = await response.json()
        setProducts(data)
        
     }
     fetchProducts()
    }, [])
    

  return (
    <>
    <Hero />
    <MainCategory/>
    <h1 className="text-center font-bold mx-auto text-4xl">Popular Products</h1>
    {
        products.length > 0 ?<Products products={products}/> : <div> Fetching Products...</div>
    }
    <Products />
    </>
  );
};

export default Home;
