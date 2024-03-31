import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const TodoInputBox = ({ insertTodo }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    e => {
      insertTodo(value);
      setValue('');
      e.preventDefault();
    },
    [insertTodo, value]
  );

  return (
    <Form onSubmit={onSubmit}>
      <Input placeholder="새로운 일정" value={value} onChange={onChange} />
      <AddBtn type="submit">add</AddBtn>
    </Form>
  );
};

export default TodoInputBox;

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  height: 62px;
  border-bottom: 1px solid #24c3dc;
  justify-content: flex-start;
  align-items: center;
`;

const AddBtn = styled.button`
  width: 60px;
  height: 36px;
  font-size: 16px;
  margin-left: 17px;
`;

const Input = styled.input`
  width: 400px;
  height: 36px;
  margin-left: 18px;
  border: 0;
  outline: none;
  font-size: 1rem;
  border-bottom: 1px solid #c5f6fa;
  padding: 0;
`;
