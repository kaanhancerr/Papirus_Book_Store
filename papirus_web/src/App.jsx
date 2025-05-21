
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import CardPage from './pages/Card/CardPage';
import BookItem from './pages/Home/components/BookItem'
import { ProtectedRoute } from './components/ProtectedRoute';
import HomePage from './pages/Home/HomePage'
import { Card } from '@mui/material';

// function LayoutWithCardPage() {
//   return (
//     <div>
//       <Sidebar />
//       <Profile />
//     </div>
//   )
// }

function App() {


  return (
    <BrowserRouter>
      {/* Giris yapmamis kullanicilar */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Register />}></Route>

        {/* Giris yapilinca gosterilecek sayfa */}
        <Route element={<ProtectedRoute />}>
          <Route path='/home' element={<HomePage />} />
          <Route path='/card' element={<CardPage />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // <div>

    //   <Sidebar />
    //   <CardPage />

    //   {/* <Topbar />
    //   <BookItem /> */}

    // </div>
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
