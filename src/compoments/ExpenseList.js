import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
  const Expense = [
    { id: 1, name: "shopping", cost: 2000 },
    { id: 2, name: "diet", cost: 200 },
    { id: 3, name: "travelling", cost: 200 },
  ];
  return (
    <ul className="listgroup">
      {Expense.map((Expense) => (
        <ExpenseItem id={Expense.id} name={Expense.name} cost={Expense.cost} />
      ))}
    </ul>
  );
}
export default ExpenseList;
