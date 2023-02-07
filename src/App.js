import React, { useState } from "react";
import Expense from "./components/expenses/expense";
import Newexpense from "./components/newexpense/newexpense";

const dummy_expenses = [
  {


    id: '01',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: '02', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: '03',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: '04',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },

];


function App() {

  const [expenses, setExpenses] = useState(dummy_expenses)

  function ExpenseHandler(exp) {

    setExpenses((prevstat) => {
      return [exp, ...prevstat]
    })
  }
  
  return (
    <div>
      <Newexpense onAddexpense={ExpenseHandler} />
      <Expense item={expenses}></Expense>

    </div>
  )

}




export default App;
