import React from "react";

const ExpenseItem = (props) => {
  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.name}
        <div>
          <span className="badge badge-primary badge-pill mr-3"></span>
          {props.cost}
        </div>
      </li>
      <div>Expense Item</div>
    </>
  );
};
export default ExpenseItem;
