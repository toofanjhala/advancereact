import React, { useState } from "react";
import ExpenseDate from './expenseDate';
import ExpenseDetail from './expenseDetails';
import Card from '../UI/card'
import './expenseitem.css'
function Expenseitem(props) {

    const [title, setTitle] = useState(props.title)
    const [amount, setAmount] = useState(props.amount)

    const clickHandler = () => {
        setTitle("updated");

    }
    const clickHandler2=()=>{
         setAmount("100")
    }



    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetail title={title} amount={amount} destination={props.destination} />
            <button onClick={clickHandler}>CHANGE TITLE</button>
            <button onClick={clickHandler2}>Expense update </button>

        </Card>
    )
}

export default Expenseitem;