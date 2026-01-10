const Firebird = require('node-firebird')

const options = {
  host: '127.0.0.1',
  port: 3050,
  database: 'C:\\Users\\Metal\\OneDrive\\Área de Trabalho\\login_Db\\dados\\DADOS.FDB',
  user: 'SYSDBA',
  password: 'scx324112',
  lowercase_keys: false,
  role: null,
  pageSize: 4096
}

function connect(callback) {
  Firebird.attach(options, callback)
}

module.exports = connect
