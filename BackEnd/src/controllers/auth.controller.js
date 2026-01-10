const connect = require('../database/connection')

exports.login = (req, res) => {
  const { username, password } = req.body

  connect((err, db) => {
    if (err) return res.status(500).json(err)

    const sql = `
      SELECT ID, USERNAME, PASSWORD
      FROM USUARIOS
      WHERE USERNAME = ?
    `

    db.query(sql, [username], (err, result) => {
      db.detach()

      if (err) return res.status(500).json(err)

      if (result.length === 0) {
        return res.status(401).json({ message: 'Usuário não encontrado' })
      }

      if (result[0].PASSWORD !== password) {
        return res.status(401).json({ message: 'Senha inválida' })
      }

      return res.json({
        id: result[0].ID,
        username: result[0].USERNAME
      })
    })
  })
}
