import { useState } from 'react'

function Signup() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleSignup = async () => {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    })
    const data = await response.json()
    setMessage(data.message)
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Signup 📝</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 m-2 rounded"
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-2 rounded"
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 m-2 rounded"
      />
      <br />
      <button onClick={handleSignup} className="bg-green-500 text-white px-6 py-2 rounded mt-4">
        Signup
      </button>
      <p className="mt-4 text-green-600">{message}</p>
    </div>
  )
}

export default Signup