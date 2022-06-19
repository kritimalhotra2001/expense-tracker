import React, { useState } from "react";
import Header from "./components/Header";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpenseForm from "./components/AddExpenseForm";

const App = () => {
  const [showAddExpense, setShowAddExpense] = useState(false);
  const [expenses, setExpenses] = useState([
    { id: 1, name: "Shopping", cost: 40 },
    { id: 2, name: "Holiday", cost: 400 },
    { id: 3, name: "Car Service", cost: 50 },
  ]);

  // Add Expense
  const addExpense = (expense) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newExpense = { id, ...expense };
    setExpenses([...expenses, newExpense]);
  };
  // Delete Expense
  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="container border p-3 my-5">
      {/* Using props in header */}
      {/* If we give prop type as number console error will be there as 
        we have mentioned title as string in header file
       */}
      <Header
        title="Expense Tracker"
        onAdd={() => setShowAddExpense(!showAddExpense)}
      />
      {showAddExpense && (
        <div className="row">
          <div className="col-sm">
            <AddExpenseForm onAdd={addExpense} />
          </div>
        </div>
      )}
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList expenses={expenses} onDelete={deleteExpense} />
        </div>
      </div>
    </div>
  );
};

export default App;
