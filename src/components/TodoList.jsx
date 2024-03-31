import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onChangeChecked, onRemove, onUpdate }) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
          todo={todo}
          index={index}
          key={todo.id}
          onChangeChecked={onChangeChecked}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
};

export default TodoList;
