import React from 'react'

const Transaction = () => {
  return (
    <li className="minus">
    {transactions.text} <span>-${400}</span><button className="delete-btn">x</button>
  </li>
  )
}

export default Transaction
