import React from "react";

const TableInfo = (props) => {
  return(
    <tr className="table__row">
      <td className="table__part">{props.code}</td><td className="table__part">{props.ask}</td>
    </tr>
  )
}

class Table extends React.Component {
  render() {
    const table = this.props.data.map((rate,i) => (
      <TableInfo key={i} ask={rate.ask} code={rate.code} country={rate.currency}/>
    ))
    
    return (
      <section className="tableSection">
        <h2 className="tableSection__title">Aktualne kursy walut</h2>
        <div className="tableSection__table">
          <table className="table__table">
            {table}
          </table>
        </div>
      </section>
    );
  }
}

export default Table