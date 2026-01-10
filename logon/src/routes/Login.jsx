import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

const Login = () => {

    const [user, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function login() {

        setLoading(true)

        const res = await fetch(`http://localhost:5001/usuarios?user=${user}&password=${password}`)
        const data = await res.json()

        setLoading(false)

        if (data.length === 0) {
            setError('Usuário não encontrado')
            return
        }

        if (data[0].password !== password) {
            setError('Senha inválida')
            return
        }
        navigate('/Users')
        setUser('')
        setPassword('')
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        login()
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <label>
                    <input type="text" placeholder='Usuário' value={user}
                        onChange={(e) => setUser(e.target.value)} />
                </label>

                <label>
                    <input type="password" placeholder='Senha' value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </label>

                <div className='lembrar'>
                    <input type="checkbox" />
                    Lembrar de mim
                    <a href="#">esqueceu sua senha?</a>
                </div>

                {error && <p>{error}</p>}

                <button type="submit">Enviar</button>

                <div className="registrar">
                    <p>Não tem um login</p> <Link to='/Register'>Registrar</Link>
                </div>

                {loading && <p>Carregando dados...</p>}
            </form>
        </div>
    )
}

export default Login