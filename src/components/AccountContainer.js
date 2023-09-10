import React, { useEffect, useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {

  const [ transData , setTransData ] = useState([])
  const [ display , setDisplay ] = useState([])

  const fetchTransactions = ()=>{
    fetch("http://localhost:8001/transactions")
    .then(response => response.json())
    .then(transactionsData => {
      setTransData(transactionsData)
      setDisplay(transactionsData)})
  }
  
  useEffect(
    ()=>{ fetchTransactions()},
    []
  )
    function handleForm(data){
      const addTransaction ={
        ...data,
        "id": transData.length + 1,
      }

        fetch("http://localhost:8001/transactions",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(addTransaction)})
        .then(response => response.json())
        .then(() => fetchTransactions() )
    }
    
    function handleDisplay(search){
      
      const filter = transData.filter(trans => trans.description.includes(search))
      const toDisplay = filter ? setDisplay(filter) : setDisplay(transData)

    }

    function handleDelete(toDelete){
      const update = display.filter(data => data.id !== parseInt(toDelete))

      console.log(toDelete, update)
    }

  return (
    <div>
      <Search transactions={transData} handleFilter={handleDisplay}/>
      <AddTransactionForm postData={handleForm}/>
      <TransactionsList currTransactions={display} deleteFunc={handleDelete}/>
    </div>
  );
}

export default AccountContainer;
