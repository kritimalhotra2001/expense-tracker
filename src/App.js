import "./App.css";
import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./compoments/Budget";
import Remaining from "./compoments/Remaining";
import ExpenseTotal from "./compoments/ExpenseTotal";
import ExpenseItem from "./compoments/ExpenseItem";
import ExpenseList from "./compoments/ExpenseList";

function App() {
  //const addItems = () => {
  //setData([...data,{name:data.name, amount:data.amount}]);

  const [listSheet, setListSheet] = [
    { itemName: "first Item", amount: 500 },
    { itemName: "first Item", amount: 500 },
    { id: 1, name: "shopping", cost: 2000 },
    { id: 2, name: "diet", cost: 200 },
    { id: 3, name: "travelling", cost: 200 },
  ];

  const [money, setMoney] = useState([1, 2]);
  const [items, setItems] = useState("");
  const [MoneySpent, setMoneySpent] = useState("");
  const [data, setData] = useState({
    itemName: "",
    amount: "",
  });

  useEffect(() => {
    const sum = listSheet.reduce((accumulator, object) => {
      return (accumulator = object.amount);
    }, 0);
    setTotal(sum);
  }, [data]);
  const [total, setTotal] = useState(0);
  const addValues = () => {
    setItems([...items, { name: items.name, amount: items.amount }]);
    setData({
      name: "",
      amount: "",
    });
  };

  //const onClickHandler = e;*/

  return (
    <div className="App">
      <div class="flex-container">
        <p>money spent</p>
        <input
          type="text"
          name=""
          id=""
          placeholder="enter the money spent"
          onChange={(e) => setMoneySpent(e.target.value)}
        />
        <button onClick={addValues}>Add</button>
        <p>items</p>
        <input type="text" placeholder="enter the items" /> <p>total</p>
        <input
          type="text"
          placeholder="total money spent"
          onChange={(e) => total(e.target.value)}
        />
      </div>
      <h3></h3>
      <Budget />
      <Remaining />
      <ExpenseTotal />
      <ExpenseItem />
      <ExpenseList />
    </div>
  );
}

export default App;
