import {  Col, Divider, Row, Skeleton } from 'antd';
import axios from 'axios';
///import { ToDoContext } from '../context/todo-context';
 import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import TodoList from './todo-list';

import TodoForm from './todo-form';

const Todo = () => {
  ////const [state] = useContext(ContactContext);
  // eslint-disable-next-line no-unused-vars
  const [data, setData ] = useState([]);
  const [todo, setTodo ] = useState({});
  ///const todos = {};
  useEffect(() => {
    axios.get(`http://localhost:3030/todo`)
        .then((response) => {
          setData(response.data.data);
        })
}, []);
  const fetchData = async () => {
     try {
       const response = await axios.get('http://localhost:3030/todo');
       setData(response.data.data);
       console.log(todo);
       console.log(data);
     } catch (error) {
       console.log(error);
     }
   };
  // eslint-disable-next-line no-unused-vars
  const onDelete = async (id) => {
     try {
       axios.get(`http://localhost:3030/todo/${id}`)
       .then(() => {
        fetchData();
    })
     } catch (error) {
       console.log(error);
     }
   };
 /*  const ViewTodo = () => {
    alert("This is an alert from the Child Component")
  };
*/
const ViewTodo = (data) => {
 setTodo({todo,data});
 //setTodo(data);
 console.log(todo);
}
  return (
    <section>
    <Row gutter={1}>
    <Col className="gutter-row" span={9}>
    
    <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      // eslint-disable-next-line react/jsx-no-comment-textnodes
      >
  
      <TodoList data ={data} ViewTodo={ViewTodo}/>
  </InfiniteScroll>

    </Col>
    <Col className='gutter-row' space={1}>
    <Divider type="vertical" style={{ height: "100%" }} />
    </Col>
    <Col span={14}>
    <TodoForm todo={todo }/>
    </Col>
  </Row>
 </section>
  );
};

export default Todo;