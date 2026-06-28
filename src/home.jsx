import { useUser } from './Context'

function Home() {
  const { user, setUser } = useUser()

  return (
    <div className="bg-blue-500 text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">Home Page 🏠</h1>
      <p className="text-xl">Welcome, {user}!</p>
      <input
        type="text"
        placeholder="Change your name..."
        className="mt-4 p-2 rounded text-black"
        onChange={(e) => setUser(e.target.value)}
      />
    </div>
  )
}

export default Home