
import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from "antd";
import "antd/dist/antd.css";
import TodoList from './pages/todo.js';

const App = () => {
  return (
    <Container>
      <div className="ui two item menu">
        <NavLink className="item" activeClassName="active" exact to="/">
          Todo List
        </NavLink>
        
      </div>
      <Route exact path="/" component={TodoList} />
    </Container>
  );
};

export default App;