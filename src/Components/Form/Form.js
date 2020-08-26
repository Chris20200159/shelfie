import React from 'react';
import './Form.css';
import axios from 'axios';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      productName: '',
      price: 0,
      imageUrl: '',
      edit: false
    }
  }

componentDidMount = () => {
  console.log(this.props)
  if(this.props.match.params.id){
    this.setState({
      edit: true
    })
  }

}

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value});
};

addInventory = () => {
  axios.post('/api/products', this.state)
  .then((res) => {
    this.props.history.push('/')
  })
};

saveInventory = () => {
  axios.put(`/api/products/${this.props.match.params.id}`, this.state)
  .then((res) => {
    this.props.history.push('/')
  })
}

  render(){
    console.log(this.state)
    return <div className="form-container">
      <div class="Form">
        {/* <div class="form_img_preview" style="background-image"></div> */}
        <p>Image URL:</p>
        <input onChange={this.handleChange} name='imageUrl' type="text" value={this.state.imageUrl}/>
        <p>Product Name:</p>
        <input onChange={this.handleChange} name='productName' type="text" value={this.state.productName}/>
        <p>Price:</p>
        <input onChange={this.handleChange} name='price' type="text" pattern="[0-9]*" value={this.state.price}/>
      </div>
        <div class="form-button-box">
          <button>Cancel</button>
          {this.state.edit ? <button onClick={this.saveInventory}>Save</button> : <button onClick={this.addInventory}>Add To Inventory</button>}
        </div>

    </div>
  }


}

export default Form;