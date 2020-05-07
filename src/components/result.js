import React from "react";

function Results(props) {
  return (
    <table className="table">
      {props.results.map(result => (
        <table style="width:100%">
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Steven</td >
            <td>Leonardo</td>
            <td>50</td>
          </tr>
        </table>
      ))}
    </table>
  );
}

export default Results;