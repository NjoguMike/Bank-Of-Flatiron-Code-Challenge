import React from "react";

function Transaction({ details , toDelete }) {

  function handleDelete(event){
    const id =event.target.value
    toDelete(id)
  }

  return (
    <tr>
      <td>{details.date}</td>
      <td>{details.description}</td>
      <td>{details.category}</td>
      <td>{details.amount}</td>
      <td><button style={{"color":"firebrick"}} className="ui button" type="delete" value={details.id} onClick={handleDelete}>Delete</button></td>
    </tr>
  );
}

export default Transaction;
