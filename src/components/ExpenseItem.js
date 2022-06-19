import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = ({ expense }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {expense.name}
      <div>
        <span className="badge bg-primary mr-3"> ₹{expense.cost}</span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
