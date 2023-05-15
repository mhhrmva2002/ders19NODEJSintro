import React from 'react'
import { Link } from "react-router-dom";

const Products = ({products,handleDelete}) => {
  return (
    <><ul>
    {products &&
      products.map((item) => {
        return (
          <li key={item.id}>
            <Link to={`/product/${item.id}`}>
              {item.productName}
            </Link>
            , {item.price}
            <button onClick={() => handleDelete(item.id)}>delete</button>
          </li>
        );
      })}
  </ul></>
  )
}

export default Products