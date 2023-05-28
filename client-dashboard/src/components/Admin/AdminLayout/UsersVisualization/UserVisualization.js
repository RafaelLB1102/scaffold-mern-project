import React, { useEffect, useState } from 'react';
import './styles.scss'

const MyComponent = () => {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3200/api/v1/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchUsers();
  }, []); // Se ejecuta una vez cuando se monta el componente

  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
