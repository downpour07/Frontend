import "./App.css";
import { useState } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [Decoration, setDecoration] = useState(false);

  const change = (todovalue) => {
    setTodo(todovalue.target.value);
  };

  const submit = (todovelue) => {
    todovelue.preventDefault();
    if (toDo === "") {
      return;
    }
    setTodos((prevTodos) => [...prevTodos, toDo]);
    setTodo("");
  };

  const clearAll = () => {
    setDecoration((prevValue) => !prevValue);
  };

  const resetAll = () => {
    setTodos([]);
    setCheckedItems([]);
  };

  function click(index) {
    if (checkedItems.includes(index)) {
      setCheckedItems(checkedItems.filter((item) => item !== index));
    } else {
      setCheckedItems([...checkedItems, index]);
    }
  }

  return (
    <>
      <header>
        <div>TODO LIST</div>
      </header>
      <div className="body">
        <div>
          <form onSubmit={submit}>
            <input
              onChange={change}
              type="text"
              placeholder="입력하세요"
              value={toDo}
            ></input>
            <button className="add">ADD</button>
          </form>
        </div>
        <div>
          <button className="clear" onClick={clearAll}>
            전체 지우기
          </button>
          <button className="reset" onClick={resetAll}>전체 삭제</button>
        </div>
        <div>
          <ul>
            {toDos.map((item, index) => (
              <li
                key={index}
                onClick={() => click(index)}
                style={{
                  textDecoration: checkedItems.includes(index) || Decoration
                    ? "line-through"
                    : "",
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;