
import './App.css'
import Login from './components/Login'
import Registration from './components/Registration'
import TheCompiler from './components/TheCompiler'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import Req from './components/Req'

function App() {


  return (
    <BrowserRouter>

      <Nav></Nav>
      <Routes>

        <Route index path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/req' element={<Req/>} />
        <Route path='/registration' element={<Registration/>} />
        <Route path='/compiler' element={<TheCompiler/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
