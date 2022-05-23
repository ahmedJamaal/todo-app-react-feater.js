import React from 'react';
import { message, Button } from 'antd';

export const FlashMessage = ({ message }) => {
  return (
    <div
      positive={message.type === 'success'}
      negative={message.type === 'fail'}
      header={message.title}
      content={message.content}
    />
  );
}

export const flashErrorMessage = (dispatch, error) => {
  const err = error.response ? error.response.data : error; // check if server or network error
  dispatch({
    type: 'FLASH_MESSAGE',
    payload: {
      type: 'fail',
      title: err.name,
      content: err.message,
    },
  });
}
