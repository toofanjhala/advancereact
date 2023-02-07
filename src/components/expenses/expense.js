import React, { useState } from "react";
import ExpenseList from "./expenselist";
import './expense.css';
import Card from '../UI/card';
import Expensechart from "./expensechart";
import ExpensesFilter from "./expensefilter";

function Expense(props) {
    const [selectedyear, setselectedyear] = useState('2020');
    function filterHandler(selectedyear) {
        setselectedyear(selectedyear)
     
    }
    
    const filtereditem = props.item.filter((expense)=>{
       return expense.date.getFullYear().toString()===selectedyear

    })

    return (
        
        <div>
            <Card className='expenses'>
               
                <ExpensesFilter Onfilterchange={filterHandler} year={selectedyear} />
                <Expensechart expenses={filtereditem}/>
                 <ExpenseList item={filtereditem}/>
                
            </Card>
        </div>
    )

}

export default Expense;