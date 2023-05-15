import { useEffect, useState } from "react";
import "./App.css";
import AddProduct from "./Pages/AddProducts";
import ProductDetails from "./Pages/ProductDetails";
import { Route, Routes } from "react-router-dom";
import Products from "./Pages/Products";
import Navbar from "./Pages/Navbar";


function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8080/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  function handleDelete(id) {
    if (window.confirm("are you sure to delete?")) {
      fetch(`http://localhost:8080/products/${id}`, {
        method: "DELETE",
      });
      setProducts(products.filter((product)=>product.id!==id));
    }
  }
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Products products={products} handleDelete={handleDelete}/>}/>
        <Route path="/add" element={<AddProduct />}/>
        <Route path="/product/:id" element={<ProductDetails/>}/>
      </Routes>
    </>
  );
}

export default App;