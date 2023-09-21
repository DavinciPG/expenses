import './App.css';

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

import React, { useState } from "react";
import { flushSync } from 'react-dom';

const DUMMY_EXPENSES = [
    {
        id:"e1",
        date: new Date(2024, 0, 10),
        title: 'New book',
        price: 30.99
    },
    {
        id:"e2",
        date: new Date(2024, 0, 10),
        title: 'New Jeans',
        price: 99.99
    }
]

const App = () => {
    const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

    const addExpenseHandler = (expense) =>{
        console.log('In App.js')
        setExpenses((previousExpenses )=>{
            return [expense,...expenses]
        })
    }

    const filterExpenseHandler = (filter) =>{
        console.log('Filter Data in App.js', filter)
        const filteredExpenses = DUMMY_EXPENSES.filter(
            (expense) => expense.date.getFullYear() == filter
        );
        setExpenses([...filteredExpenses])
    }

  return (
    <div className="App">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <ExpensesFilter onFilterChange={filterExpenseHandler}></ExpensesFilter>
        <Expenses expenseData={DUMMY_EXPENSES}></Expenses>
    </div>
  );
}

export default App;
