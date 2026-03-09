import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>{
      setUsers(data);
      setLoading(false);
    }) 
  }, [])

  return (
    <div className='App'>
        <h3>Danh sách người dùng</h3>
        {loading ? (
          <p>Đang tải...</p>
        ) : (
          <div className='user-list'>
            {users.map(user => (
              <div key={user.id} className='user-item'>
                <h3>{user.name}</h3>
                <p>{user.email}</p>
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default App;