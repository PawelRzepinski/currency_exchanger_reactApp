import React from 'react';
import './App.scss';

import Header from "./components/Header";
import CalculatorCount from "./components/CalculatorCount";
import Table from "./components/Table";
import Footer from "./components/Footer"

class App extends React.Component {

  state = {
    data: []
  }

  componentDidMount() {
    fetch('http://api.nbp.pl/api/exchangerates/tables/c/')
      .then(res => res.json())
      .then(rates => {
        this.setState({
          data: rates[0].rates
        })
      })      
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <CalculatorCount data={this.state.data}/>
        <Table data={this.state.data} />
        <Footer />
      </React.Fragment>  
    );
  } 
}

export default App;
