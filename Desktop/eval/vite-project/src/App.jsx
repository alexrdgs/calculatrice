import { useReducer } from "react";
import { expenseReducer } from "./reducer";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseSummary from "./components/ExpenseSummary";
import "./styles/styles.css";  // Import du CSS global

const initialState = { expenses: [] };

function App() {
  const [state, dispatch] = useReducer(expenseReducer, initialState);

  return (
    <div className="container">
      <h1>Gestion des Dépenses</h1>
      <ExpenseForm dispatch={dispatch} />
      <ExpenseSummary expenses={state.expenses} />
      <ExpenseList expenses={state.expenses} dispatch={dispatch} />
    </div>
  );
}

export default App;
