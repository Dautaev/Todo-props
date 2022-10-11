import React, { useState } from "react";
import Todos from "./Todos";
import { tasks } from "./tasks";

function Form() {

  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  
  const addTodo = () => {
      {setTodos([
        {
          text: text,
        },
        ...todos
      ]);
      setText("");
    }
  };

  return (
    <>
    <div className="form">
      <input  value={text} onChange={(e) => setText(e.target.value)}  placeholder="Введите текст..." type="text"/>
      <button onClick={addTodo}>Добавить</button>
    </div>
     <Todos
        todos={todos}
        setTodos={setTodos} />
   
    </>
  );
}

export default Form;
