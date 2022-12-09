import React from "react";
import './ExpensesList.css';
import ExpenseItem from "./ExpenseItem";

const callback = (item) => {
    return <ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date}/>
};

const ExpensesList = props => {

    if (props.items.length === 0) {
      return <h2 className="expenses-list__fallback">
        Found no expenses.
      </h2>
    };

    return <ul className="expenses-list">
        {props.items.map(callback)}
    </ul>
};

export default ExpensesList;