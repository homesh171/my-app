import { useState, useEffect } from 'react'

function Users() {
  const [users, setUsers] = useState([])

  const fetchUsers = () => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const deleteUser = async (id) => {
    await fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE'
    })
    fetchUsers()
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Users List 👥</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id} className="bg-blue-500 text-white p-3 mb-3 rounded-lg text-xl flex justify-between items-center px-6">
            <span>{user.name} - {user.email}</span>
            <button 
              onClick={() => deleteUser(user._id)}
              className="bg-red-500 px-3 py-1 rounded hover:bg-red-700"
            >
              Delete ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Users