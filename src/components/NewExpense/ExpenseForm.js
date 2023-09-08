import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = () => {
  // const [newTitle, setNewTitle]= useState("");
  // const [newAmount, setNewAmount]= useState("");
  // const [newDate, setNewDate]= useState("");

  // const titlenewHandler = (event) => {
  //     const newT= event.target.value;
  //     console.log(newT);
  //     setNewTitle(newT);
  // };

  // const amountChangeHandler = (event) => {
  //     console.log(event.target.value);
  //     setNewAmount(event.target.value);
  // };
  // const dateChangeHandler = (event) => {
  //     setNewDate(event.target.value);
  // };

  const [newInput, SetNewInput] = useState({
    newtitle: "",
    newAmount: "",
    newDate: "",
  });

  const titlenewHandler = (event) => {
    SetNewInput({
      ...newInput,
      newtitle: event.target.value,
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
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titlenewHandler} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0" onChange={amountChangeHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2024-01-01"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {" "}
        <button type="submit"> Add Expenses</button>{" "}
      </div>
    </form>
  );
};

export default ExpenseForm;
