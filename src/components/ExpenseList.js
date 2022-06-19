import ExpenseItem from "./ExpenseItem";

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ExpenseList;
