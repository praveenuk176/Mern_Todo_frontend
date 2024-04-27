import React, { useState } from 'react'
import {BrowserRouter as Router, Routes,Route, Navigate } from 'react-router-dom'
import Header from './Component/Header'
import Front from './Component/Front'
import Home from './Component/Home'
import TodoList from './Component/TodoList'
import Footer from './Component/Footer'
import Contact from './Component/Contact'
import Login from './Component/Login'
import SignUp from './Component/SignUp'


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
  {isAuthenticated ? (
    <>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/signup" element={<Navigate to="/home" />} />
      <Route path="/front" element={<Front />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/todo" element={<TodoList />} />
    </>
  ) : (
    <>
      <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/signup" element={<SignUp setIsAuthenticated={setIsAuthenticated} />} />
      <Route path="/front" element={<Front />}></Route>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/contact" element={<Navigate to="/" />} />
      <Route path="/todo" element={<Navigate to="/" />} />
    </>
  )}
</Routes>
<div>
  <Footer/>
</div>
    </Router>
  );
};

export default App