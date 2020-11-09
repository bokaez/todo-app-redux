import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { saveNewTodo } from '../todos/todosSlice';

const Header = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();
    // If user pressed enter key
    if (e.which === 13 && trimmedText) {
      dispatch(saveNewTodo(trimmedText));
      setText('');
    }
  };

  return (
    <header className="header">
      <input
        type="text"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  );
};

export default Header;
