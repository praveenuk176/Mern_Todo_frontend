import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const TodoList = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  function handlePost() {
    axios.post('https://mern-todo-backend-c6a2.onrender.com/posting', { name, age, course })
      .then(() => {
        alert('Data has been posted');
        setName('');
        setAge('');
        setCourse('');
      })
      .catch(() => {
        alert('Data has not been posted');
      });
  }

  function getData() {
    axios.get('https://mern-todo-backend-c6a2.onrender.com/posting')
      .then((response) => {
        setTodo(response.data);
      })
      .catch(() => {
        alert('Content retrieval Failed');
      });
  }

  function updateTodo(id, updatedObject) {
    axios.put(`https://mern-todo-backend-c6a2.onrender.com/posting/${id}`, updatedObject)
      .then(() => {
        alert('Data has been updated');
        getData();
      })
      .catch(() => {
        alert('Data cannot be changed');
      });

  }

  function deleteTodo(id) {
    axios.delete(`https://mern-todo-backend-c6a2.onrender.com/posting/${id}`)
      .then(() => {
        alert('Data has been deleted');
        getData();
      })
      .catch(() => {
        alert('Data cannot be deleted');
      });
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: 'url("https://img.freepik.com/free-vector/soft-yellow-watercolor-texture-background_1055-10236.jpg?w=740&t=st=1713528321~exp=1713528921~hmac=a09f5f3cd6fef2f1d213128710831bda6b64d42065b360dfe471d6be175273e2")',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      width: '100%',
      height: '600px',
    }}>
      <h1 style={{ marginBottom: '20px', color: 'hsl(157, 86%, 14%)', fontSize: '24px', fontWeight: 'bold' }}>Todo List Management</h1>
      <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid hsl(157, 86%, 14%)', borderRadius: '5px', width: '450px', backgroundColor: 'whitesmoke' }}>
        <TextField id="outlined-basic" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} style={{ marginBottom: '10px', width: '100%' }} />
        <TextField id="outlined-basic" label="Age" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} style={{ marginBottom: '10px', width: '100%' }} />
        <TextField id="outlined-basic" label="Course" variant="outlined" value={course} onChange={(e) => setCourse(e.target.value)} style={{ marginBottom: '10px', width: '100%' }} />
        <Button variant="contained" style={{ backgroundColor: 'hsl(157, 86%, 14%)', color: 'white', fontSize: '12px', marginRight: '10px' }} onClick={handlePost}>Add</Button>
        <Button variant="contained" style={{ backgroundColor: 'hsl(157, 86%, 14%)', color: 'white', fontSize: '12px' }} onClick={getData}>Get All</Button>
      </div>
      <ol style={{ listStyleType: 'none', padding: 0 }}>
        {todo.map((item) => (
          <li key={item._id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid hsl(157, 86%, 14%)', borderRadius: '5px', width: '450px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>Name: {item.name} | Age: {item.age} | Course: {item.course}</div>
            <div>
              <Button variant="contained" style={{ backgroundColor: 'green', color: 'white', fontSize: '12px', marginRight: '10px' , marginLeft: '10px'}} onClick={() => {
                const newName = prompt('Enter the new Name');
                const newAge = prompt('Enter the new age');
                const newCourse = prompt('Enter the new Course');

                if (newName === null) {
                  alert('Please enter new data');
                } else {
                  const updatedObject = { name: newName, age: newAge, course: newCourse };
                  updateTodo(item._id, updatedObject);
                }
              }}>Edit</Button>
              <Button variant="contained" style={{ backgroundColor: 'rgb(176, 44, 44)', color: 'white', fontSize: '12px' }} onClick={() => deleteTodo(item._id)}>Delete</Button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;