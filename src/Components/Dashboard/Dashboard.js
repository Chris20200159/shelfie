import React, { Component } from 'react';
import Product from '../Product/Product';
import './Dashboard.css';
import axios from 'axios';

class Dashboard extends Component {
  constructor(){
    super()
    this.state = {
      products: []
    }
  }
  
componentDidMount () {
  axios.get('/api/products')
  .then((res) => {
    this.setState({products: res.data})
    console.log(res.data)
  })
}

deleteProduct = (id) => {
  axios.delete(`/api/products/${id}`)
  .then((res) => {
    this.setState({products: res.data})
    console.log(res.data)
  })
}

 render () {
  return (
   
  
    <div className="Dashboard">
      {this.state.products.map( e =>{
        return <Product deleteProduct={this.deleteProduct} key={e.product_id} item= {e}/>
      })}

    </div>
  )};
}

export default Dashboard;