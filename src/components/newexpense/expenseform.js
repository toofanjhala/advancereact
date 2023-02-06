import React from "react"
import './expenseform.css'


function ExpenseForm() {
    function titleChangeHandler(event){
       console.log(event.target.value)
    }
    return (


        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> EXPENSE TITLE</label>
                    <input type="text" onChange={titleChangeHandler}></input> </div>
                <div className="new-expense__control">
                    <label> Amount</label>
                    <input type="number" min="0.01" step="0.01" ></input> </div>
                <div className="new-expense__control">
                    <lable> Choose a Date</lable>
                    <input type="date" min="2019-01-01" max="2023-12-31"></input></div></div>
            <div className="new-expense__actions">
                <button type="submit">ADD EXPENSES</button></div>
        </form>
    )
}

export default ExpenseForm