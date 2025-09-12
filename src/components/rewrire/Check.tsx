'use client';
import { fetcher, logger } from '@/lib';
import React, { useEffect, useState } from 'react';

const CheckPage: React.FC = () => {
  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }

  const [data, setData] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const jsonData = await fetcher<Todo>('api/todos/1');
      logger.info('response', jsonData);
      setData(jsonData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Check Component</h1>
      <p>This is the Check component.</p>
      {data ? (
        <div>
          <p>ID: {data.id}</p>
          <p>Title: {data.title}</p>
          <p>Completed: {data.completed ? 'Yes' : 'No'}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CheckPage;
