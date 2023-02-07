import React from "react"
import './expenselist.css'
import Expenseitem from "./expenseitem"

function ExpenseList(props) {
    if (props.item.length === 0) {
        return <h2 className="expenses-list__fallback"> There is no content</h2>
    }
   else if(props.item.length===1){
    return <ul className="expenses-list">
    {props.item.map((Expens) => (
        <Expenseitem
            key={Expens.id}
            title={Expens.title}
            amount={Expens.amount}
            date={Expens.date}

        />))}
        <p className="expenses-list__fallback"> "please add more items..."</p>
</ul>
   }


    return <ul className="expenses-list">
        {props.item.map((Expens) => (
            <Expenseitem
                key={Expens.id}
                title={Expens.title}
                amount={Expens.amount}
                date={Expens.date}

            />))}
    </ul>

}



export default ExpenseList