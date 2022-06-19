const AddExpenseForm = () => {
  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
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
