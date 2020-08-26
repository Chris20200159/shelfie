import React from 'react';
import './Product.css';
import { withRouter } from 'react-router-dom';

const Product = (props) => {
  return (
    <div className="Product">
      <h1>{props.item.product_name}</h1>
      <button 
      onClick={() => props.deleteProduct(props.item.product_id)}
      >Delete</button>
      <button onClick={() => props.history.push(`/edit/${props.item.product_id}`)}>Edit</button>
    </div>
  );
}

export default withRouter(Product);