import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      price: 0,
      imgurl: ''
    }
  }




  render(){
    console.log(this.state)
    return <div className="form-container">
      <div class="Form">
        {/* <div class="form_img_preview" style="background-image"></div> */}
        <p>Image URL:</p>
        <input type="text" value/>
        <p>Product Name:</p>
        <input type="text" value/>
        <p>Price:</p>
        <input type="text" pattern="[0-9]*" value="0"/>
      </div>
        <div class="form-button-box">
          <button>Cancel</button>
          <button>Add To Inventory</button>
        </div>

    </div>
  }


}

export default Form;