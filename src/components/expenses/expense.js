import React, { useState } from "react";
import Expenseitem from "./expenseitem";
import './expense.css';
import Card from '../UI/card';
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
                <h2>Let's get started!</h2>
                <ExpensesFilter Onfilterchange={filterHandler} year={selectedyear} />

                {filtereditem.map((Expens) => (
                    <Expenseitem
                        key={Expens.id}
                        title={Expens.title}
                        amount={Expens.amount}
                        date={Expens.date}
                    />

                )
                )}
            </Card>
        </div>
    )

}

export default Expense;