import { useState } from 'react'

function AddUser() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const addUser = async () => {
    const response = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email })
    })
    const data = await response.json()
    setMessage(`User ${data.name} added!`)
    setName('')
    setEmail('')
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Add User</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 m-2 rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-2 rounded"
      />
      <br />
      <button onClick={addUser} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">
        Add User
      </button>
      <p className="mt-4 text-green-600">{message}</p>
    </div>
  )
}

export default AddUser