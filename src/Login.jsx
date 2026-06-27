import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleLogin = async () => {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    const data = await response.json()
    
    if (data.token) {
      localStorage.setItem('token', data.token)
      setMessage(`Welcome ${data.name}! Login successful! 🎉`)
    } else {
      setMessage(data.message)
    }
  }

  return (
    <div className="p-10 text-center">
      <h1 className="text-4xl font-bold mb-6">Login 🔐</h1>
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
      <button onClick={handleLogin} className="bg-blue-500 text-white px-6 py-2 rounded mt-4">
        Login
      </button>
      <p className="mt-4 text-green-600">{message}</p>
    </div>
  )
}

export default Login