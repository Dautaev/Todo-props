import React from "react";
import { FaStar } from 'react-icons/fa';
import { VscChromeClose } from "react-icons/vsc";

function Todo(props) {
  return (
    <div className={`todo ${props.todo.favorite ? "selected" : ''}`}>
      <div className="favorite">
        <span onClick={() => props.makeFavorite(props.index)}><FaStar/></span>
      </div>
      <div className="todo-text">{props.todo.text}</div>
      <div className="actions">
        <button onClick={() => props.deleteTodo(props.index)}><VscChromeClose/></button>
      </div>
    </div>
  );
}

export default Todo;
