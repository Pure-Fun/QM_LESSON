import React, {Component} from "react";

class Table extends Component {
  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <td>Kobe</td>
            <td>巨星</td>
          </tr>
        </thead>  
        <tbody>
          <tr>
            <td>charlie</td>
            <td>工程师</td>
          </tr>
          <tr>
            <td>Kurry</td>
            <td>前端工程师</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Table;