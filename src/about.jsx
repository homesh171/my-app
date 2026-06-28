import { useUser } from './context'

function About() {
  const { user } = useUser()

  return (
    <div className="bg-green-500 text-white p-10 text-center">
      <h1 className="text-4xl font-bold mb-4">About Page 👤</h1>
      <p className="text-xl">My name is {user}!</p>
    </div>
  )
}

export default About