import PropTypes from "prop-types"; //shortcut - impt tab

const Header = ({ title }) => {
  return (
    <header>
      {/* inline style add style = {headingStyle} */}
      <h1>{title}</h1>
    </header>
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
