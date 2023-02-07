import React from "react";
import "./expenseDate.css"


const ExpenseDate = (props) => {

    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear()
    return (
        <div className="expense-date">
            <div expense-date__month>{month.toString()}</div>
            <div expense-date__year>{year}</div>
            <div expense-date__day>{`${day}`}</div>
        </div>
    )

}

export default ExpenseDate;