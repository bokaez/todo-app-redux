import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import TodoListItem from './TodoListItem';

const selectTodoIds = (state) => {
  // TODO: Split logic into pure functions for better readibility
  return state.todos
    .filter((todo) => {
      return ['active', 'completed'].includes(state.filters.status)
        ? state.filters.status === 'active'
          ? !todo.completed
          : todo.completed
        : todo;
    })
    .filter((todo) => {
      return state.filters.colors.length > 0
        ? state.filters.colors.includes(todo.color)
        : todo;
    })
    .map((todo) => todo.id);
};

const TodoList = () => {
  const todoIds = useSelector(selectTodoIds, shallowEqual);

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} id={todoId} />;
  });

  return <ul className="todo-list">{renderedListItems}</ul>;
};

export default TodoList;
