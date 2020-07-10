const mysql = require('mysql');

// if (process.env.NODE_ENV !== 'production') {
//     require('dotenv').config();
// }

const mySqlConnection = mysql.createConnection({
    host: 'sql2.freemysqlhosting.net',
    user: 'sql2353881',
    password: 'fG9*gP3%',
    database: 'sql2353881',
    insecureAuth : true
});

mySqlConnection.connect(function(err: Error) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
  
    console.log('connected as id ' + mySqlConnection.threadId);
  });

module.exports = mySqlConnection;


