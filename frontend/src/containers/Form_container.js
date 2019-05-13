import React, { Component } from 'react';
import Form from '../components/Form'
import Answer from '../components/Answer'
import RequestHelper from '../helpers/request_helper'
import './form.css'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: 0
    }
    this.handleUserInput = this.handleUserInput.bind(this)
  }

  handleUserInput(event) {
    console.log(event);
    const calculate = new RequestHelper
    calculate.post(event).then((result) => {
      this.setState({answer: result})
    })
  }

  render() {
    return(
      <div id='card-size' className='ui card'>
        <div id='smaller-container'>
          <Form handleUserInput={this.handleUserInput}/>
          <Answer answer={this.state.answer}/>
        </div>
      </div>
    )
  }
}

export default FormContainer
