
import ExpenseItems from "./ExpenseItems";
import "./Expenses.css";
import Card from "./Card";

function Expenses (props) {

  return (
    <Card className="expenses">
      <ExpenseItems title={props.items[0].Title} date={props.items[0].date} amount={props.items[0].Amount}></ExpenseItems>
      <ExpenseItems title={props.items[1].Title} date={props.items[1].date} amount={props.items[1].Amount}></ExpenseItems>
      <ExpenseItems title={props.items[2].Title} date={props.items[2].date} amount={props.items[3].Amount}></ExpenseItems>
    </Card>
  );
}

export default Expenses;