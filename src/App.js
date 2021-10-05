import "./App.css";
import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

const initialExpenses = [
  { id: uuid(), charge: "rent", amount: 1500 },
  { id: uuid(), charge: "car payment", amount: 400 },
  { id: uuid(), charge: "credit bill", amount: 1200 },
];

console.log(initialExpenses);

function App() {

  // *********************** state values *****************
  // all expenses, add expenses
  const [expenses, setExpenses] = useState(initialExpenses);

    // *********************** functionality *****************
  return (
    <div>
      <Alert />
      <h1>Budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>
      <h1>
        total spending :
        <span className="total">
          $ {expenses.reduce((sum, expense) => (sum += expense.amount), 0)}
        </span>
      </h1>
    </div>
  );
}

export default App;
