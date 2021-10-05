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
  // single expense
  const [charge, setCharge] = useState("");
  // single Amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({show: false})
  // *********************** functionality *****************
  //handle input changes
  const handleChange = (e) => {
    if (e.target.name === "charge") {
      setCharge(e.target.value);
    }
    if (e.target.name === "amount") {
      console.log(e.target.value);
      setAmount(e.target.value);
    }
  };

  // handle Alert 
  const handleAlert = ({type, text}) => {
    setAlert({show: true, type, text})
    setTimeout(() => {
      setAlert({show:false})
    },3000)
  }
  // handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(amount) > 0 && charge !== "") {
      setExpenses([
        ...expenses,
        { id: uuid(), charge, amount: parseInt(amount) },
      ]);
      handleAlert({type:'success', text: 'item added.'})
      setCharge("");
      setAmount("");
    } else {
      handleAlert({type: 'danger', text: `charge can't be empty value and 
      amount value has to be bigger than zero`})
    }
  };

  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text}/>}
      <h1>Budget calculator</h1>
      <main className="App">
        <ExpenseForm
          amount={amount}
          charge={charge}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
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
