const mysql = require('mysql2');


const connect = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'rootroot',
      database: 'movies_db'
    },
    console.log(`Connected to the movies_db database.`)
  );

  connect.connect(function (err) {
    if (err) throw err;
  });

  module.exports = connect;