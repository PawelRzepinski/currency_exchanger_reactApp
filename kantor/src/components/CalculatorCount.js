import React from "react";

let Result = (props) => {
  return (
    <h2 className="calculator__result">Otrzymasz: <strong>{props.text}</strong> zł</h2>
  )
};

const CurrencyList = (props) => {
  return (
    <option value={props.ask}>{props.code}</option>
  )
}

class CalculatorCount extends React.Component {

  state = {
    amount: this.value,
    select: 3.888,
    result: "Wprowadź dane"
  }

  

  handleChange = (e) => {
    this.setState({
        amount: e.target.value
    })        
  }

  selectChange = (e) => {
    this.setState({
      select: e.target.value
    })
    console.log(e.target.value);
  }

  buttonEvent = () => {
    if (this.state.amount === undefined){
      alert("Podaj kwotę do wymiany")
    } else {
      this.setState({
        result: (this.state.amount / this.state.select).toFixed(2)
      })
    } 
  }

  buttonShadow(e) {
    e.target.classList.toggle("buttonShadow");
  }

  render() {
    const currency = this.props.data.map((rate,i) => (
      <CurrencyList key={i} ask={rate.ask} code={rate.code} country={rate.currency}/>
    ))
    return (
      <section className="calculator">
        <h2 className="calculator__text">Mam (zł)</h2>
        <label className="calculator__form">
          <input className="calculator__input" onChange={this.handleChange} type="number" placeholder="Wpisz kwotę"></input>
        </label>
        <h2 className="calculator__text">Zamienię na:</h2>
        <select className="calculator__input input--select" onChange={this.selectChange}>
          {currency}
        </select>
        <button className="calculator__input input--btn" onClick={this.buttonEvent} onMouseDown={this.buttonShadow} onMouseUp={this.buttonShadow}>Oblicz</button>
        <Result text={this.state.result}/>
      </section>
    );
  }
}

export default CalculatorCount;