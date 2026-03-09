import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [users, setUsers] = useState([]);      
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);  

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true); 
        setError(null);   
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Không thể lấy dữ liệu từ máy chủ!');
        }
        const data = await response.json();
        setUsers(data); 

      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h3>Bài 2: Loading & Error State</h3>

      {error && (
        <div style={{ color: 'red', padding: '20px', border: '1px solid red' }}>
          <h3> Đã xảy ra lỗi:</h3>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Thử lại</button>
        </div>
      )}

      {loading && !error && (
        <div className="loader">
          <p style={{ fontSize: '20px', fontWeight: 'bold' }}> Đang tải dữ liệu, vui lòng đợi...</p>
        </div>
      )}

      {!loading && !error && (
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left', maxWidth: '400px', margin: '0 auto' }}>
          {users.map(user => (
            <li key={user.id} style={{ 
              padding: '10px', 
              borderBottom: '1px solid #ccc',
              marginBottom: '10px'
            }}>
              <strong>Name:</strong> {user.name} <br />
              <strong>Email:</strong> {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;