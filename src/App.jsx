import React from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Product from "./components/Product"
import ProductCategory from "./components/ProductCategory"
import Category from "./components/Category"
import Contact from "./components/Contact"
import About from "./components/About"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/products" element={<ProductCategory/>} />
        <Route path="/categories/:name" element={<Category/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />

        <Route path="*" element={<div> 404 Not Found .. </div>} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
