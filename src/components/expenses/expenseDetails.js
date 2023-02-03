import React from "react";
import './expenseitem.css'

function ExpenseDetail(props){
    return(
        <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <h2>{props.destination}</h2>
        <div className='expense-item__price'>${props.amount}</div>
    </div>
    )

}

export default ExpenseDetail;