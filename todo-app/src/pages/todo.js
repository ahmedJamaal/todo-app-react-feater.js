import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import ContactList from '../components/todo-list';
import { ToDoContext } from '../context/todo-context';
import { FlashMessage, flashErrorMessage } from '../components/other/flash-message';

const TodoPage = () => {
  const [state, dispatch] = useContext(ToDoContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/todo');
        dispatch({
          type: 'FETCH_TODOS',
          payload: response.data.data || response.data, // in case pagination is disabled
        });
      } catch (error) {
        flashErrorMessage(dispatch, error);
      }
    };
    fetchData();
  }, [dispatch]);

  return (
    <div>
      <h1>List of Contacts</h1>
      {state.message.content && <FlashMessage message={state.message} />}
      <ContactList todoList={state.todoList} />
    </div>
  );
}

export default TodoPage;