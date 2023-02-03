import React from "react";
import Expenseitem from "./expenseitem";
import './expense.css';
import Card from '../UI/card';

function Expense() {
    const expenses = [
        {
            id: 'e1',
            title: 'Toilet Paper',
            destination: 'delhi',
            amount: 94.12,
            date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', destination: 'indore', amount: 799.49, date: new Date(2021, 2, 12) },
        {
            id: 'e3',
            title: 'Car Insurance',
            destination: 'mumbai',
            amount: 294.67,
            date: new Date(2021, 2, 28),
        },
        {
            id: 'e4',
            title: 'New Desk (Wooden)',
            destination: 'lucknow',
            amount: 450,
            date: new Date(2021, 5, 12),
        },
    ];
    return (


        <Card className='expenses'>
            <h2>Let's get started!</h2>

            {expenses.map((Expens) => {
                return (
                    <div>
                        <Expenseitem title={Expens.title}
                            amount={Expens.amount}
                            date={Expens.date}
                            destination={Expens.destination}> </Expenseitem>
                    </div>
                )
            })}
        </Card>
    )

}

export default Expense;