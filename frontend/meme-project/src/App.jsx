import './App.css'
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'
import Memes from './pages/Memes'
import Login from './pages/Login'
import Register from './pages/Register'
import UserMemes from './pages/UserMemes'
import Navbar from './components/Navbar'

const Layout = () => {
 return(
   <>
   <Navbar />
   <Outlet />
   </>
 )
}

function App() {
 return (
   <BrowserRouter>
     <Routes>
       <Route path='/' element={<Layout />}>
         <Route index element={<Memes />}/>
         <Route path='login' element={<Login />}/>
         <Route path='register' element={<Register />}/>
         <Route path='userMemes' element={<UserMemes />}/>
       </Route>
     </Routes>
   </BrowserRouter>
 )
}

export default App
