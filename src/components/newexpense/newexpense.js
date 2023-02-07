import React from "react";
import './newexpense.css'
import ExpenseForm from "./expenseform";


function Newexpense(props) {
    const formDatahandler = (expensedata) => {
        const newexpensedata = { ...expensedata, id: Math.random().toString() }
     
       props.onAddexpense(newexpensedata)
    }
    
    
    return (
        <div className="new-expense">
            <ExpenseForm onSave={formDatahandler}></ExpenseForm>
        </div>
    )


}

export default Newexpense;