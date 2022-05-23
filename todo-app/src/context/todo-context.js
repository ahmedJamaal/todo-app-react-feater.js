import React, { useReducer, createContext } from 'react';

export const ToDoContext = createContext();

const initialState = {
  todoList: [],
  todo: {}, // selected or new
  message: {}, // { type: 'success|fail', title:'Info|Error' content:'lorem ipsum'}
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_TODO': {
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
        message: {
          type: 'success',
          title: 'Success',
          content: 'New Contact created!',
        },
      };
    }
    case 'FETCH_TODOS': {
      return {
        ...state,
        todoList: action.payload,
      };
    }
    case 'FETCH_TODO': {
      return {
        ...state,
        todo: action.payload,
      };
    }
    case 'UPDATE_TODO': {
      const todo = action.payload;
      return {
        ...state,
        todoList: state.todoList.map(item =>
          item._id === todo._id ? todo : item,
        ),
        message: {
          type: 'success',
          title: 'Update Successful',
          content: `Contact "${todo.tittle}" has been updated!`,
        },
      };
    }
    case 'DELETE_TODO': {
      const { _id, tittle } = action.payload;
      return {
        ...state,
        todoList: state.todoList.filter(item => item._id !== _id),
        message: {
          type: 'success',
          title: 'Delete Successful',
          content: `Contact "${tittle}" has been deleted!`,
        },
      };
    }
    case 'FLASH_MESSAGE': {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      throw new Error();
  }
}

export const ToDoContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { children } = props;

  return (
    <ToDoContext.Provider value={[state, dispatch]}>
      {children}
    </ToDoContext.Provider>
  );
};
