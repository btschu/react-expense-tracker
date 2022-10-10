import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
// Using state multiple times
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
// End of using state multiple times

// Using state once
  // const [userInput, setUserInput] = state({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  // const titleChangeHandler = (event) => {
  //   setUserInput = (prevState) => {
  //     return { ...prevState, enteredTitle: event.target.value}
  //   }
  // }
  // const amountChangeHandler = (event) => {
  //   setUserInput = (prevState) => {
  //     return { ...prevState, enteredAmount: event.target.value}
  //   }
  // }
  // const dateChangeHandler = (event) => {
  //   setUserInput = (prevState) => {
  //     return { ...prevState, enteredDate: event.target.value}
  //   }
  // }
// end of Using state once

const submitHandler = (event) => {
    // prevents the page from reloading on submit
    event.preventDefault();

    // create an expense data object **this object is not needed when using the single state method above**
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
    
    // execute function from NewExpense.js
    props.onSaveExpenseData(expenseData);

    // clears form after user hits submit
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler} action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
