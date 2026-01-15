import { Link } from "react-router-dom"
import { useState } from "react"
import '../styles/Registrar.css'
const url = 'http://localhost:5001/usuarios'

const Registar = () => {

   const [user, setUser] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = async (e) => {
    e.preventDefault()

    const users = {
      user,
      password
    }

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    })

    if(!user || !password){
      alert('Preencha devidamente o campo')
      return
    }

    alert('usuário cadastrado com sucesso!')

    setUser('')
    setPassword('')
   }

  return (
    <div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <h2>Cadastrar</h2>
            <label>
              <input type="text" placeholder='Usuário'value={user}
              onChange={(e) => setUser(e.target.value)}/>
            </label>

            <label>
              <input type="password" placeholder='Senha' value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <button type="submit" className="enviar">Enviar</button>
          
          </form>
        </div>
    </div>
  )
}

export default Registar