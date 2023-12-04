import ExpenseItems from "./ExpenseItems";
import "./ExpensesList.css"

const ExpensesList = props => {

    if (props.listitems.length === 0)  {

        return <h2 className="expenses-list__fallback">Found no expense </h2>
             }
        return (    
        <ul className="expenses-list">         
        {props.listitems.map((expense) => (
        <ExpenseItems
          key={expense.id}
          title={expense.Title}
           date={expense.date}
          amount={expense.Amount}
        />
      ))
    }
    </ul>
    );


}




export default ExpensesList;