import { Link } from "react-router-dom"
import { useState } from "react"
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

    if (!res.ok) {
  const error = await res.json()
  console.log('❌ ERRO BACKEND:', error)
  alert(error.error || 'Erro ao cadastrar')
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
            <h2>Login</h2>
            <label>
              <input type="text" placeholder='Usuário'value={user}
              onChange={(e) => setUser(e.target.value)}/>
            </label>

            <label>
              <input type="password" placeholder='Senha' value={password}
              onChange={(e) => setPassword(e.target.value)}/>
            </label>

            <div className='lembrar'>
              <input type="checkbox" />
              Lembrar de mim
              <a href="#">esqueceu sua senha?</a>
            </div>

  

            <button type="submit">Enviar</button>

            <div className="registrar">
              <p>Não tem um login</p> <Link to='/Register'>Registrar</Link>
            </div>

          
          </form>
        </div>
    </div>
  )
}

export default Registar