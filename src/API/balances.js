import React, { Component } from "react";
class Balances extends Component {
  render() {
    const url = "cosmos1gx7lns4l0k73t7s63z0r7fx357gvsu0dyvmcd0";
    function getAllCourses() {
      fetch(`https://api.cosmos.network/cosmos/bank/v1beta1/balances/${url}`, {
        method: 'GET',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        }
      }).then(function (response) {
        console.log(response);
        return response.json();

      })
        .then((data) => {
          console.log(data);
        })
        .catch(function (err) {
          console.log(err)
        });
     
    }

    getAllCourses();
    return (
      <div>
        <h1>users</h1>
      </div>
    );
  }
}
    export default Balances;