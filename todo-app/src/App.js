import React from 'react';
import {
  Typography,
  Space,
  Col, Row,
  Divider
} from 'antd';
import './App.css';
import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import Todo from './pages/todo';

const { Title } = Typography;

const App = () => (
  <>

    <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
      <Space align="start">
        <img
          style={{width: 40, height: 40 }}
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
          alt="Ant Design"
        />
        <Title level={2} style={{ marginBottom: 0 }}>
          TodoList App
        </Title>
      </Space>
    </section>

   <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 40 }}>
   <Divider orientation="left">ToDo List</Divider>
  
   <Row gutter={1}>
      <Col className="gutter-row" span={9}>
      
      <TodoList />
      </Col>
      <Col className='gutter-row' space={1}>
      <Divider type="vertical" style={{ height: "100%" }} />
      </Col>
      <Col span={14}>
      <TodoForm/>
      </Col>
    </Row>
   </section>
   
  </>
);

export default App;