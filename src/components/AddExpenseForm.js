import { useState } from "react";

const AddExpenseForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  // On Submit
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter expense name");
    }
    if (!cost) {
      alert("Please enter expense cost");
    }

    onAdd({ name, cost });

    setName("");
    setCost("");
  };
  return (
    <form className="add-expense" onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary btn-block mt-3">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
