import { useState, useEffect } from 'react';
import { getBlogs } from '../services/fetch-utils';

export function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getBlogs();
      setBlogs(data);
    }
    fetchData();
  }, []);
  return { blogs };
}