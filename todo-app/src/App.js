import React from 'react';
import {
  Typography,
  Space,
 Divider
} from 'antd';
import './App.css';
import Todo from './components/todo'
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
  
      <Todo />
   </section>
   
  </>
);

export default App;