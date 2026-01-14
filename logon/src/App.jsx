import './App.css'
import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function App() {

  return (
      <div>
        <div class="particula"></div>

        <header className='header-1'>
          <NavLink to='/' className='navlink'>Login</NavLink>
          <NavLink to='/Users' className='navlink'>Usuários</NavLink>
        </header>
        
        <Outlet/>
      </div>
  )
}

export default App
