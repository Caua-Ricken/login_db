import './App.css'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function App() {

  return (
      <div>
        <header>
          <NavLink to='/'>Login</NavLink>
          <NavLink to='/Users'>Usuários</NavLink>
        </header>
        
        <Outlet/>
      </div>
  )
}

export default App
