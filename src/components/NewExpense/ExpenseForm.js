import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [newTitle, setNewTitle]= useState("");
  const [newAmount, setNewAmount]= useState("");
  const [newDate, setNewDate]= useState("");

  const titlenewHandler = (event) => {
      const newT= event.target.value;
      console.log(newT);
      setNewTitle(newT);
  };

  const amountChangeHandler = (event) => {
      console.log(event.target.value);
      setNewAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
      setNewDate(event.target.value);
  };

/*   const [newInput, SetNewInput] = useState({
    newtitle: "",
    newAmount: "",
    newDate: "",
  });

  const titlenewHandler = (event) => {
    console.log(event.target.value);
    SetNewInput((prevState) => {
      return ( {
      ...prevState,
      newtitle: event.target.value
      });
    });
    };


  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    SetNewInput({
      ...newInput,
      newAmount: event.target.value,
    });
  };
  const dateChangeHandler = (event) => {
    SetNewInput({
      ...newInput,
      newDate: event.target.value,
    });
  }; */

  const submitHandler = (event) =>{
    event.preventDefault();

    const expenseData= {
      Title: newTitle,
      Amount: newAmount,
      date: new Date (newDate)
    };
    console.log(expenseData);
    props.onSaveData(expenseData);
    
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };



  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titlenewHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0" value={newAmount} onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-01-01"
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {" "}
        <button type="button" onClick={props.onCancel}> Cancel</button>{" "}
        <button type="submit"> Add Expenses</button>{" "}
      </div>
    </form>
  );
};

export default ExpenseForm;
