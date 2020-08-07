import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      name: '',
      price: 0,
      imgurl: ''
    }
  }
}

export default Form;