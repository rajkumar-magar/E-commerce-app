import React from "react"
import Header from "./components/Header"
import Home from "./components/Home"
import Footer from "./components/Footer"
import { Route, Routes } from "react-router-dom"
import Product from "./components/Product"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products/:id" element={<Product/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
