import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

const TodoItem = ({ todo, index, onChangeChecked, onRemove, onUpdate }) => {
  const { id, text, checked } = todo;
  const [isEditClicked, setIsEditClicked] = useState(false);
  const [value, setValue] = useState(text);

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const updateIsEditClicked = useCallback(e => {
    setIsEditClicked(value => !value);
  });

  const onSubmit = useCallback(
    e => {
      onUpdate(id, value);
      setIsEditClicked(value => !value);
      e.preventDefault();
    },
    [onUpdate, value]
  );

  return (
    <>
      <Container id={index}>
        <DelBtn onClick={() => onRemove(id)}>X</DelBtn>
        {isEditClicked ? (
          // <form onSubmit={onSubmit}>
          <>
            <UpdateTodoInput value={value} onChange={onChange}></UpdateTodoInput>
            <UpdateBtn onClick={onSubmit}>완료</UpdateBtn>
            {/* <UpdateBtn type="submit">완료</UpdateBtn> */}
          </>
        ) : (
          // </form>
          <>
            <Todo onClick={() => onChangeChecked(id)} isChecked={todo.checked}>
              {todo.text}
            </Todo>
            <UpdateBtn onClick={() => updateIsEditClicked()}>수정</UpdateBtn>
          </>
        )}
      </Container>
    </>
  );
};

export default TodoItem;

const UpdateBtn = styled.button`
  opacity: 1;
  width: 40px;
  height: 24px;
  font-size: 13px;
  font-weight: lighter;
  cursor: pointer;
  margin-left: 17px;
`;

const Todo = styled.div`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: -0.05em;
  display: flex;
  align-items: center;
  height: 40%;
  width: 80%;
  margin: 21px 0px 21px 25px;
  border: none;
  background: white;
  color: ${({ isChecked }) => (isChecked == true ? '#adb5bd' : '#606060')};
  text-decoration: ${({ isChecked }) => (isChecked == true ? 'line-through' : 'none')};
`;

const UpdateTodoInput = styled.input`
  background-color: white;
  border: 0;
  border-radius: 10px;
  text-decoration: none;
  width: 80.9%;
  height: 40%;
  color: #606060;
  padding: 0px 0px 0px 0px;
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 100%;
  outline: none;
  margin-left: 21px;
`;

const DelBtn = styled.button`
  display: none;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 0px;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 472px;
  height: 60px;
  margin-left: 20px;
  padding-top: 4px;
  padding-bottom: 4px;
  background-clip: content-box;
  border-top: ${({ id }) => (id === 0 ? 'none' : '1px solid lightgray')};

  &:hover {
    background-color: #e3fafc;

    > ${DelBtn} {
      display: inline;
      background: none;
      border: 0;
      margin: 0%;
      padding: 0%;
      width: 9px;
      height: 16px;
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: #ff6161;
      margin-left: 0px;
    }
  }
`;
