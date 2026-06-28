import { useState } from 'react'
import Calculator from './calculator'
import Header from './header'
import Quiz from './quiz'
import Weather from './weather'
import Todolist from './todo'
import Home from './home'
import About from './about'
import Contact from './contact'
import Users from './Users'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import AddUser from './AddUser'
import Signup from './Signup'
import Login from './Login'

function App() {

  return (
    <div>
      <BrowserRouter>
      <nav className="bg-gray-800 p-4 flex gap-6 justify-center">
        <Link to="/" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Home</Link>
        <Link to="/about" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">About</Link>
        <Link to="/contact" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Contact</Link>
        <Link to="/users" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Users</Link>
        <Link to="/adduser" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Add User</Link>
        <Link to="/Signup" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Sign up</Link>
        <Link to="/Login" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Login</Link>
        <Link to="/calculator" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Calculator</Link>
        <Link to="/quiz" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Quiz</Link>
        <Link to="/weather" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Weather</Link>
        <Link to="/todo" className="text-white text-lg font-bold hover:text-white hover:bg-green-500 px-4 py-2 rounded">Todo</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/todo" element={<Todolist />} />
      </Routes>
    </BrowserRouter>
      
    </div>
  )
}

export default App