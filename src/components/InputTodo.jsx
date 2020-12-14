import React from 'react';

const InputTodos = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div className="input-area">
      <input disabled={disabled}
      placeholder="TODOを入力" 
      value={todoText} 
      onChange={onChange}>
      </input>
      <button disabled={disabled}
      onClick={onClick}>追加</button>
    </div>
  );
};

export default InputTodos;