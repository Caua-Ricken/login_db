import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../styles/Login.css'

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
        <div className="container-login">
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
                    <label>
                    <input type="checkbox" className='check'/>
                    Lembrar de mim
                    </label>
                    <a href="#" className='link'>esqueceu sua senha?</a>
                </div>

                {error && <p className='carregando'>{error}</p>}

                <button type="submit" className='enviar'>Enviar</button>

                <div className="registrar">
                    <p>Não tem um login?</p> <Link to='/Register' className='link'>Registrar</Link>
                </div>

                {loading && <p className='carregando'>Carregando dados...</p>}
            </form>

        </div>
    )
}

export default Login