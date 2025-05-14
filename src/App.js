import React, { useState } from 'react';
import ListComponent from './components/ListComponent';
import useUsers from './hooks/useUsers';
import index from './components/index.css';

const App = () => {
  const [id, setId] = useState(1);
  const { loading, users, error } = useUsers(id);

  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app-container">
      <div className="content-container">
        <div>
          <h2>Data Fetching Application</h2>
          <ListComponent items={users} renderItem={(user) => <div className='display'>{user.name}</div>} />
          <button className="prev-button" onClick={() => setId(id - 1)}>
            Prev
          </button>
          <button className="next-button" onClick={() => setId(id + 1)}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;