import { Header } from "./compoments/Header";
import Budget from "./compoments/Budget";
import Remaining from "./compoments/Remaining";
import ExpenseTotal from "./compoments/ExpenseTotal";
import { ExpenseList } from "./compoments/ExpenseList";
import { AddExpenseForm } from "./compoments/AddExpenseForm";

const App = () => {
  return (
    <div className="container border p-3 my-5">
      <Header />
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
          <ExpenseList />
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpenseForm />
        </div>
      </div>
    </div>
  );
};

export default App;
