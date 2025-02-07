const ExpenseList = ({ expenses, dispatch }) => {
  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <li key={expense.id} className="expense-item">
          <span>{expense.name} - {expense.amount}€ ({expense.category})</span>
          <button onClick={() => dispatch({ type: "REMOVE_EXPENSE", payload: expense.id })}>
            Supprimer
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
