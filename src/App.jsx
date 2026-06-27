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
import AddUser from './addUser'
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
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/users" element={<Users />} />
        <Route path="/adduser" element={<AddUser/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
      {/* <Header></Header>
      <Todolist></Todolist>
      <Calculator></Calculator>
      <Quiz></Quiz>
      <Weather></Weather> */}
    </div>
  )
}

export default App