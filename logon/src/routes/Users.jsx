import { useState } from "react"

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

    setUser(user.filter((user) => user.id !== Number(userId)));
    setUserId("");
    alert('Usuário apagado com sucesso 🗑️')

  }

  return (
    <div>
        <h2>Usuarios cadastrados:</h2>

        <button className='mostrarUser' onClick={listarUsuarios}>Listar usuários</button>

        <ul>
          {user.map((users) => (
            <li key={users.id}>
              ID: {users.id} - Nome: {users.user}
            </li>
          ))}
        </ul>

        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)}/>

        <button onClick={apagarUsuario}>deletar user</button>


    </div>
  )
}

export default Users