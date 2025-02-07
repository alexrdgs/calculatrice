const ExpenseSummary = ({ expenses }) => {
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  const totalByCategory = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  return (
    <div className="summary">
      <h2>Total: {total}€</h2>
      <ul>
        {Object.entries(totalByCategory).map(([category, amount]) => (
          <li key={category}>{category}: {amount}€</li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseSummary;
