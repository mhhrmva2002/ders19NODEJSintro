import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ props }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    function handleClick(id) {
      fetch(`http://localhost:8080/products/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setProduct(data);
        });
    }
    handleClick(id);
  });
  return (
    <div>
      <h2>{product.productName}</h2>
      <p>Brand: {product.brandName}</p>
      <p>Price: {product.price}</p>
      <p>Stock Count: {product.stockCount}</p>
      <p>Discounted: {product.isDiscounted ? "Yes" : "No"}</p>
    </div>
  );
};

export default ProductDetails;
