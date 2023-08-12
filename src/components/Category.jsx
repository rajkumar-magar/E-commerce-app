import React from 'react'
import { useState,useEffect, } from 'react'
import {useParams} from 'react-router-dom'
import Products from './Products'

const Category = () => {
    const {name} = useParams()
    const [products, setProducts] =  useState([])

    useEffect(() => {
     const fetchProducts = async() =>{
        const response = await fetch(`https://fakestoreapi.com/products/category/${name}`)
        const data = await response.json()
        setProducts(data)
        
     }
     fetchProducts()
    }, [])
    
    if (products.length == 0) return <div>Loading...</div>;
  return (
   <Products products={products}/>
  )
}

export default Category