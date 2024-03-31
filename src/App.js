import GlobalStyles from './styles/GlobalStyles';
import TodoInputBox from './components/TodoInputBox';
import styled from 'styled-components';
import { useCallback, useRef, useState } from 'react';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트 기초 알아보기',
      checked: true,
    },
    {
      id: 2,
      text: '컴포넌트 스타일링 하기',
      checked: true,
    },
    {
      id: 3,
      text: '투두리스트 만들기',
      checked: false,
    },
  ]);
  const nextId = useRef(4);
  const onChangeChecked = useCallback(id => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            checked: !todo.checked,
          };
        }
        return todo;
      })
    );
  });

  const insertTodo = useCallback(_text => {
    const todo = {
      id: nextId.current,
      text: _text,
      checked: false,
    };
    setTodos(todos => todos.concat(todo));
    nextId.current++;
  }, []);

  const onRemove = useCallback(_id => {
    setTodos(todos => todos.filter(todo => todo.id !== _id));
  }, []);

  const onUpdate = (id, text) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text } : todo)));
  };

  return (
    <>
      <GlobalStyles />
      <Template>
        <Title>TodoList</Title>
        <TodoInputBox insertTodo={insertTodo} onRemove={onRemove} />
        <TodoList
          todos={todos}
          onChangeChecked={onChangeChecked}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      </Template>
    </>
  );
};

export default App;

const Template = styled.div`
  justify-content: center;
  height: fit-content;
  margin-top: 64px;
  min-width: 512px;
  min-height: 241px;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.25), 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

const Title = styled.div`
  display: flex;
  width: 512px;
  height: 110px;
  background: #51d3e7;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 100%;
  color: #ffffff;
  align-items: center;
  text-align: center;
  justify-content: center;
  letter-spacing: -0.05em;
`;

const TodoBox = styled.div`
  background-color: white;
  width: 512px;
`;
