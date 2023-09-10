import React, { useState } from "react";

function AddTransactionForm({ postData }) {

  const [ form , setFormValue ] = useState({
    "id":"",
    "date": "",
    "description": "",
    "category": "",
    "amount": 0
  })

    function handleChange(event){
      const value = event.target.value
      const name = event.target.name
      
      const formData = {
        ...form,
        [name]:value}
      setFormValue(formData)
    }

    function handleSubmit(event){
     event.preventDefault()
     postData(form)
    }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" value={form.date} onChange={handleChange}/>
          <input type="text" name="description" value={form.description} placeholder="Description" onChange={handleChange}/>
          <input type="text" name="category" value={form.category} placeholder="Category" onChange={handleChange}/>
          <input type="number" name="amount" value={form.amount} placeholder="Amount" step="0.01" onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
