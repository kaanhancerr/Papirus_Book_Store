
import Sidebar from './components/Sidebar';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Box from '@mui/material/Box';
import Topbar from './components/Topbar';
import BookItem from './pages/Home/components/BookItem';



function App() {


  return (
    <div>
      <Sidebar />
      <Topbar />
      <BookItem />

    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path='/' element={<Login />} />
    //     <Route path='/register' element={<Register />} />
    //     <Route path='/login' element={<Login/>}/>
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App
