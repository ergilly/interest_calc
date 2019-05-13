import React, {Component} from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      baseAmount: 0,
      annualInterest: 0,
      calculationPeriod: 0
    }
    this.handleBaseChange = this.handleBaseChange.bind(this)
    this.handleInterestChange = this.handleInterestChange.bind(this)
    this.handleYearsChange = this.handleYearsChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBaseChange(event) {
    this.setState({ baseAmount: parseInt(event.target.value) });
  }
  handleInterestChange(event) {
    this.setState({ annualInterest: parseInt(event.target.value) });
  }
  handleYearsChange(event) {
    this.setState({ calculationPeriod: parseInt(event.target.value) });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.baseAmount);
    console.log(this.state.annualInterest);
    console.log(this.state.calculationPeriod);
    this.props.handleUserInput(this.state);
    this.setState({ baseAmount: 0, annualInterest: 0, calculationPeriod: 0 });
  }

  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Base Amount:</label>
          <input aria-label="base-amount" type="text" name="base-amount" onChange={this.handleBaseChange}/>
        </div>
        <div className="field">
          <label>Annual Interest (%):</label>
          <input aria-label="annual-interest" type="text" name="annual-interest" onChange={this.handleInterestChange}/>
        </div>
        <div className="field">
          <label>Years to Grow:</label>
          <input aria-label="years-to-grow" type="text" name="years-to-grow" onChange={this.handleYearsChange}/>
        </div>
        <button className="ui button" type="submit" onClick={this.handleSubmit}>Calculate</button>
      </form>
    )
  }
}

export default Form
