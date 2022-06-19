import React from "react";
import { TiDelete } from "react-icons/ti";

const ExpenseItem = (item) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {item.name}
      <div>
        <span className="badge badge-primary badge-pill mr-3">
          £{item.cost}
        </span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
};

export default ExpenseItem;
