import React from "react";
import "./App.css";
import AddNewItemForm from "./components/AddNewItemForm";

function App() {
  const [items, setItems] = React.useState([]);

  function handleNewItem(label) {
    if (typeof label !== "string" || label.length < 0) return;

    setItems([...items, { id: crypto.randomUUID(), label }]);
  }

  return (
    <div className="app">
      <div className="todo">
        <ol className="list">
          {items.map((item) => (
            <li key={item.id} className="list-item">
              {item.label}
            </li>
          ))}
        </ol>
      </div>
      <AddNewItemForm handleNewItem={handleNewItem} />
    </div>
  );
}

export default App;
