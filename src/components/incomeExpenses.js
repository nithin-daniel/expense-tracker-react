import React from 'react'
import '../App.css';
const incomeExpenses = () => {
  return (
    <div>
       <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p  className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p  className="money minus">-$0.00</p>
        </div>
      </div>
    </div>
  )
}

export default incomeExpenses
