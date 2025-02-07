import { useState } from "react";

const ExpenseForm = ({ dispatch }) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const addExpense = (e) => {
    e.preventDefault();
    if (!name || !amount || !category) return;

    dispatch({
      type: "ADD_EXPENSE",
      payload: { id: Date.now(), name, amount: parseFloat(amount), category },
    });

    setName("");
    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={addExpense} className="form">
      <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="number" placeholder="Montant" value={amount} onChange={(e) => setAmount(e.target.value)} />
      <input type="text" placeholder="Catégorie" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default ExpenseForm;
