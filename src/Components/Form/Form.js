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
}

export default Form;