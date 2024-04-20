import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Header from './Component/Header'
import Front from './Component/Front'
import Home from './Component/Home'
import TodoList from './Component/TodoList'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import Login from './Component/Login'
import SignUp from './Component/SignUp'


const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
        </div>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/front' element={<Front />} />
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/todo' element={<TodoList />} />
        </Routes>
        <div>
          <Footer/>
        </div>
      </Router>
    </div>
  )
}

export default App