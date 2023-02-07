import React ,{useState} from "react";
import './newexpense.css'
import ExpenseForm from "./expenseform";


function Newexpense(props) {
    const [isediting,setisediting]= useState(false)

    const formDatahandler = (expensedata) => {
        const newexpensedata = { ...expensedata, id: Math.random().toString() }
     
       props.onAddexpense(newexpensedata)
       setisediting(false)
    }

    const editinghandler=()=>{
        setisediting(true)
    }

    const stopediting=()=>{
        setisediting(false)
    }
    
    
    return (
        <div className="new-expense">
       {!isediting && <button onClick={editinghandler}>ADD NEW EXPENSE</button>}
        {isediting  &&  <ExpenseForm onSave={formDatahandler} onCancel={stopediting}></ExpenseForm>}
        </div>
    )


}

export default Newexpense;