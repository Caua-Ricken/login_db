
import { Link } from "react-router-dom"
import { useState } from "react"
import '../styles/Registrar.css'
import { use } from "react"
const url = 'http://localhost:5001/usuarios'

const Registar = () => {

   const [user, setUser] = useState('')
   const [password, setPassword] = useState('')
   const [loading, setLoading] = useState(false)

   const handleSubmit = async (e) => {
    e.preventDefault()

    const users = {
      user,
      password
    }
    
    try {
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
    
   }  catch (err) {
      alert('erro ao conectar com o servidor')
    } finally {
      setLoading(false)
    }
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
