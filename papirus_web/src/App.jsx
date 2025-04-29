
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Box from '@mui/material/Box';
import Login from './pages/Login';
import Register from './pages/Register';


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
