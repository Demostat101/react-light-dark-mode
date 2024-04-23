
import { Route, Routes } from 'react-router-dom'



import './App.css'
import Home from './MyRouters/Home'
import About from './MyRouters/About'
import Contact from './MyRouters/Contact'
import Settings from './MyRouters/Settings'
import LoginPage from './MyRouters/LoginPage'
import LogOutPage from './MyRouters/LogOutPage'
import NavBar from './MyRouters/NavBar'

function App() {

  return (
    <>
      <div>

        

        <NavBar/>

        <Routes>

          <Route path='/' element= {<Home/>}></Route>

          <Route path='/about' element= {<About/>}></Route>

          <Route path='/contact' element= {<Contact/>}></Route>

          <Route path='/settings' element= {<Settings/>}></Route>

          <Route path='/login' element= {<LoginPage/>}></Route>
          
          <Route path='/logout' element= {<LogOutPage/>}></Route>

        </Routes>

      </div>
 
    </>
  )
}

export default App
