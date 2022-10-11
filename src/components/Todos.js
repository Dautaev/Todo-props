import React from 'react';
import Todo from './Todo';

function Todos({todos, setTodos}) {

    const deleteTodo = (indexOfRemovingItem) => {
        const filtered = todos.filter((item,index) => {
          if (index === indexOfRemovingItem) {
            return false;
          }
          return true;
        });
        setTodos(filtered);
      };
    
      const makeFavorite = (add) => {
        const newTodos = todos.map((item, index) => {
          if (index === add) {
            return {
              ...item,
              favorite: !item.favorite
            };
          }
          return item;
        });
        setTodos(newTodos);
      };
    
    return (
        <div className="todos">
        {todos.map((todo, index) => {
          return (
              <Todo
                  key={index}
                  todo={todo}
                  index={index}
                  makeFavorite={makeFavorite}
                  deleteTodo={deleteTodo}
              />
          )})
        }
        </div>
    );
}

export default Todos;