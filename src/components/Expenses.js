import "./Expenses.css";
import Card from "./Card";
import ExpensesFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredValue, setFilteredValue] = useState("2020");

  const onFilterHandler = (filtervalue) => {
    console.log("value is", filtervalue);
    setFilteredValue(filtervalue);
  };

  const filterUsed = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredValue;
  });
  
/*   let expensesContent = <p> No Data is Added </p>;
  if (filterUsed.length > 0)  {
       expensesContent = filterUsed.map((expense) => (
      <ExpenseItems
        key={expense.id}
        title={expense.Title}
        date={expense.date}
        amount={expense.Amount}
      />
    ))
  } */




  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter filter={onFilterHandler} selected={filteredValue} />

{/*    ##     Ternary Expression
        {filterUsed.length === 0 ? <p> No Data </p> :filterUsed.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.Title}
            date={expense.date}
            amount={expense.Amount}
          />
        ))} */}


{/*         ##   AND && Operator
        {filterUsed.length === 0 && <p> No data to display</p>}
        {filterUsed.length === 0 && filterUsed.map((expense) => (
          <ExpenseItems
            key={expense.id}
            title={expense.Title}
            date={expense.date}
            amount={expense.Amount}
          />
        ))}   */}

{/*         {expensesContent} */}
        <ExpenseChart expenses={filterUsed} />

        <ExpensesList listitems={filterUsed} />


      </Card>
    </div>
  );
}

export default Expenses;
