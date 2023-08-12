import React from "react";
import { useState, useEffect } from "react";
import FeatureInfo from "./FeatureInfo";

const MainCategory = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      const data = await response.json();
      setCategory(data);
    };
    fetchCategories();
  }, []);

  if (category.length == 0) return <div>Loading...</div>;

  return <FeatureInfo cards={category} />;
};

export default MainCategory;
