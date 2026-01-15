import { useState } from "react"
import '../styles/Users.css'

const Users = () => {

   const [user, setUser] = useState([])
   const [userId, setUserId] = useState("");

   const url = "http://localhost:5001/usuarios"

   
   const listarUsuarios = async () => {
     const res = await fetch(url);
     const data = await res.json();
     setUser(data);
     alert('Usuários listados com sucesso ✅')
    };



  const apagarUsuario = async () => {
    if(!userId){
      alert('digite um ID ⚠️')
      return
    }

    await fetch(`${url}/${userId}`, {
      method: 'DELETE',
    })

    if(!res.ok) {
      alert('erro ao excluir usuário')
      return
    }

    setUser((prevUsers) => {
    prevUsers.filter((user) => user.id !== Number(userId))
})

    setUserId("");
    alert('Usuário apagado com sucesso 🗑️')

  }

  return (
    <div className="container-usuar">
        <h2>Usuarios cadastrados:</h2>

        <button className='enviar' onClick={listarUsuarios}>Listar usuários</button>

        <ul>
          {user.map((users) => (
            <li key={users.id}>
              ID: {users.id} - Nome: {users.user}
            </li>
          ))}
        </ul>

        <input type="text" placeholder="Id do usuário:" value={userId} onChange={(e) => setUserId(e.target.value)}/>

        <button onClick={apagarUsuario} className="enviar">deletar user</button>


    </div>
  )
}

export default Users