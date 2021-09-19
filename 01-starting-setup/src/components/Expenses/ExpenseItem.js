import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import { useState } from 'react';

const ExpenseItem = (data) =>
{
  

    const clickHandler = () => {
        setTitle('updated');
    };

   const  [title , setTitle] =  useState(data.title);
    return (
        
        <Card className="expense-item">
        <ExpenseDate date= {data.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{data.amount}$</div>
                </div>
                <button onClick={clickHandler}> Change Title</button>
        </Card>
    );
}

export default ExpenseItem;