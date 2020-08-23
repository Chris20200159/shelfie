import React from 'react';
import './Product.css';

const Product = (props) => {
  return (
    <div className="Product">
      <h1>{props.item.product_name}</h1>
      <button 
      onClick={() => props.deleteProduct(props.item.product_id)}
      >Delete</button>
    </div>
  );
}

export default Product;