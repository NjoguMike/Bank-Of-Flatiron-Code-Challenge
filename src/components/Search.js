import React, { useState } from "react";
import Transaction from "./Transaction";

function Search({ transactions , handleFilter}) {

  const [ searchItem , setSearchItem ] = useState("")
  

  function handleChange(event){
    const search = event.target.value
    setSearchItem(search)

    const filter = transactions.filter(trans => trans.category.includes(search))
    handleFilter(filter)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchItem}
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
