import './Expenseitem.css'
import './ExpenseDate.css'
import ExpenseDate from "./ExpenseDate";

import React, {useState} from 'react';
import Card from "./Card";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.expenseData.expenseData.title)
    const clickHandler = () =>{
        setTitle('Updated!')
        console.log(title)
    }
    return (
        <Card className="expense-item">
            <div className="expense-item">
                <ExpenseDate date={props.expenseData.expenseData.date}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.expenseData.expenseData.title}</h2>
                    <div className='expense-item__price'>{props.expenseData.expenseData.price}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem