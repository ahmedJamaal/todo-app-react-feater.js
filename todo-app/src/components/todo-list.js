import {   List ,Button } from 'antd';
///import { ToDoContext } from '../context/todo-context';
 
import { DeleteOutlined } from '@ant-design/icons'
import axios from 'axios';
import { useContext } from 'react';
const TodoList = ({data,ViewTodo}) => {
    const onDelete = async (id) => {
        try {
          axios.delete(`http://localhost:3030/todo/${id}`)
          .then((data) => {
              console.log(data);
          /// fetchData();
       })
        } catch (error) {
          console.log(error);
        }
      };
    const onUpdate = async (todos) => {
        try {
           /// console.log(todo);
            console.log(data);
           this.state.displayTodo(todos);
            
          /*axios.delete(`http://localhost:3030/todo/${id}`)
          .then((data) => {
           fetchData();
        })
        */
        } catch (error) {
          console.log(error);
        }
      };
  const items = () => {
      console.log(data);
    return data.map(todo => {
      return    <List.Item key={todo._id}  size="small" style={{  cursor:"pointer"}}>
      <List.Item.Meta onClick={() => ViewTodo(todo)}
        title={todo.tittle}
        description={todo.description}
      />
      <div>
      <Button type="danger" shape="circle" onClick={() => onDelete(todo._id)}
      icon={<DeleteOutlined />} size="large" />
            </div>
    </List.Item>
    });
  };

  return <List>{items()}</List>;
};

export default TodoList;