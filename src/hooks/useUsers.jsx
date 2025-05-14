import { useState, useEffect } from 'react';

const useUsers = (id) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const url = `https://jsonplaceholder.typicode.com/users?id=${id}`;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, [id]);

  return { loading, users, error };
};

export default useUsers;