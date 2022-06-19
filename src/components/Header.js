import PropTypes from "prop-types"; //shortcut - impt tab

const Header = ({ title, onAdd }) => {
  return (
    <div className="d-flex justify-content-between">
      <header>
        <h1>{title}</h1>
      </header>
      <button
        type="button"
        className="btn btn-success btn-sm my-2"
        onClick={onAdd}
      >
        Add Expense
      </button>
    </div>
  );
};

// If no prop/attribute then what value
Header.defaultProps = {
  title: "Expense Tracker",
};

// proptypes are used to make code more robust as we define prop/attribute type
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: 'black'
// }
export default Header;
