import React, {useState} from 'react';

import "./Expenses.css" ;
import Card from "../UI/Card";
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';


function Expenses ({Ex}){
   
    const [filteredYear , setFilteredYear]= useState('2020');

    const filterChangedHandler = selectedYear => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = Ex.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear ;
    });

    
    return (
      <div>
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter = {filterChangedHandler}/>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
            {/* <ExpenseItem 
        title = {Ex[0].title} 
        amount= {Ex[0].amount} 
        date= {Ex[0].date} 
      />
      <ExpenseItem 
        title = {Ex[1].title} 
        amount= {Ex[1].amount} 
        date= {Ex[1].date} 
      />
      <ExpenseItem 
        title = {Ex[2].title} 
        amount= {Ex[2].amount} 
        date= {Ex[2].date} 
      />
      <ExpenseItem 
        title = {Ex[3].title} 
        amount= {Ex[3].amount} 
        date= {Ex[3].date} 
      /> */}
        </Card>
        </div>
    )
}
export default Expenses ; 