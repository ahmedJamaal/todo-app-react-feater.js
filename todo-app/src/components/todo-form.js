/* eslint-disable no-unused-vars */
import React from "react";
import { Form, Input, Button } from "antd";
import axios from 'axios';
import { useState } from "react";

const ContactForm = () => {
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState("optional");
  const validateMessages = {
    required: '${label} is required!',
  };
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
        label="Todo Title *"
        rules={[{ required: true }]}
        tooltip="This is a required field"
      >
        <Input placeholder="input placeholder" />
      </Form.Item>

      <Form.Item
        name={["todo", "description"]}
        rules={[{ required: true }]}
        label="Note"
      >
        <Input.TextArea height="400px" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button type="danger">Close</Button>
      </Form.Item>
      <Form.Item></Form.Item>
    </Form>
  );
};

export default ContactForm;
