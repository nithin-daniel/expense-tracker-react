import React, { useContext } from 'react'
import '../App.css'
import { GlobalContext } from '../context/GlobalState';
import { Transaction } from '../components/Transaction';

const TransactionList = () => {
    const { transactions } = useContext(GlobalContext); 
  return (
    <>
       <h3>History</h3>
      <ul className="list">
        {transactions.map(transactions => (<Transaction transactions={transactions}/>))}

      </ul>
    </>
  )
}

export default TransactionList
