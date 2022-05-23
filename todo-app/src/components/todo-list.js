import {  Divider, List, Skeleton ,Button } from 'antd';
///import { ToDoContext } from '../context/todo-context';
 
import { DeleteOutlined } from '@ant-design/icons'
import { useEffect, useState } from 'react';

import InfiniteScroll from 'react-infinite-scroll-component';
const TodoList = () => {
  const [data, setData] = useState([]);

  const loadMoreData = () => {
 fetch('http://localhost:3030/todo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.data]);
      
      })
      .catch(() => {
       
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 700,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 10}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
        scrollableTarget="scrollableDiv"
      >
      
        <List
          dataSource={data}
          renderItem={item => (
            <List.Item key={item._id}  size="small">
              <List.Item.Meta
                title={item.tittle}
                description={item.description}
              />
              <div>
              <Button type="danger" shape="circle" icon={<DeleteOutlined />} size="large" />
      </div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};

export default TodoList;