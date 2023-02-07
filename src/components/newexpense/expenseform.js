import React, { useState } from "react"
import './expenseform.css'


function ExpenseForm(props) {
    const [enteredtitle, setTitle] = useState("")
    const [enteredamount, setAmount] = useState(" ")
    const [entereddate, setDate] = useState(" ")
    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }
    function amountChangeHandler(event) {
        setAmount(event.target.value)
    }
    function dateChangeHandler(event) {
        setDate(event.target.value)
    }

    function submitHandler(event) {

        event.preventDefault();
        let formdata = {
            title: enteredtitle,
            amount: enteredamount,
            date: new Date(entereddate)
        }


        props.onSave(formdata)


        setAmount("")
        setTitle("")
        setDate("")

    }
    return (


        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                    required
                        onChange={titleChangeHandler}
                        placeholder="Enter Title"
                        value={enteredtitle}>
                    </input> </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number"
                    required
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                        placeholder="Please enter amount "
                        value={enteredamount}>
                    </input> </div>
                <div className="new-expense__control">
                    <label>Choose a Date</label>
                    <input type="date"
                    required
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                        value={entereddate}>
                    </input></div></div>
            <div className="new-expense__actions">
                <button type="submit">ADD EXPENSES</button></div>
        </form>
    )
}

export default ExpenseForm