import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css"


const NewExpense = (props) => {

    const  [editing, setEditing]=useState(false);

    const setIsEditHandler = () => {
        setEditing(true);
    };

    const stopEditingHandler = () => {
        setEditing(false);
    };

    const saveDataHandler = (data) => {
       const newExpense  = {
        id: Math.random().toString(),
        ...data
        };
        console.log(newExpense)

        props.onAddData(newExpense);
        setEditing(false);
    };

    return (
        <div className="new-expense">
            {!editing &&    ( <button onClick={setIsEditHandler}>Add New Expenses</button>)}
            {editing &&           ( <ExpenseForm onSaveData={saveDataHandler} onCancel={stopEditingHandler}/>)}
        </div>



    );



}

export default NewExpense;