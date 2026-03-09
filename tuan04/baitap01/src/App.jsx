import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  // useEffect(() =>{
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(response => response.json())
  //   .then(data =>{
  //     setUsers(data);
  //     setLoading(false);
  //   }) 
  // }, [])
useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        
        setUsers(data);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="App">
      <h2>Danh sách Users</h2>
      {loading ? (
        <p>Đang tải...</p>
      ) : (
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id} className="user-item">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
 
  