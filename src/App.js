import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";


const initialExpenses = [
  { id: "e1", Title: "Night out", Amount: 231.5, date: new Date(2023, 8, 1) },
  { id: "e2", Title: "Car", Amount: 232.5, date: new Date(2022, 10, 12) },
  { id: "e3", Title: "Bills", Amount: 241.5, date: new Date(2022, 9, 13) },
  { id: "e4", Title: "Water", Amount: 23.5, date: new Date() },
  { id: "e5", Title: "Mobile", Amount: 43.5, date: new Date() },
  { id: "e6", Title: "Internet", Amount: 10.5, date: new Date() },
];


function App() {

  const[expenses, setExpenses]= useState(initialExpenses);
  

  const addDataHandler = (addData) => {
    setExpenses((prevExpenses) => {
      return [
        addData,
        ...prevExpenses]
      } 
      );
    console.log("App.js", addData)
    console.log(expenses)
  };

  return (
    <div>
      <NewExpense onAddData={addDataHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
