/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Form, Input, Button } from "antd";
import axios from 'axios';
import { useState } from "react";

const TodoForm = ({todo}) => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const validateMessages = {
    required: '${label} is required!',
  };

  const [id, setID] = useState(null);
  const tittle = 'todo.data.tittle';
  const [description, seDescription] = useState('ss');
  useEffect(() => {
      /*setID(todo.data._id)
      setTittle(todo.data.tittle);*/
      seDescription('todo.data.description');
  }, []);

  const createContact = async data => {
    try {
      console.log(data);
      const response = await axios.post('http://localhost:3030/todo', data.todo);
      
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = async data => {
    await createContact(data);
   console.log(data);
  };
  const onCancel =  () => {
    try {
        console.log(todo.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Form
      layout="vertical"
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["todo", "tittle"]}
        value={tittle} 
        label="Todo Title *"
        rules={[{ required: true }]}
        tooltip="This is a required field"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item
        name={["todo", "description"]}
        value={description} 
        rules={[{ required: true }]}
        label="Note"
      >
        <Input.TextArea  autoSize={{ minRows: 15, maxRows: 20 }} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="danger"  onClick={() => onCancel(todo)}>Cancel</Button>
      </Form.Item>
      <Form.Item></Form.Item>
    </Form>
  );
};

export default TodoForm;
