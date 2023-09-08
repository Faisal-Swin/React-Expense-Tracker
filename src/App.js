import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
function App() {
  const expenses = [
    { Title: "Night out", Amount: 231.5, date: new Date() },
    { Title: "Car", Amount: 232.5, date: new Date() },
    { Title: "Bills", Amount: 241.5, date: new Date() },
    { Title: "Water", Amount: 23.5, date: new Date() },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
