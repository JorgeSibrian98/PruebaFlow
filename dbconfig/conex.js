const Sequelize = require('sequelize');

//Azure DB connection Generic
/*module.exports =  new Sequelize('sigestran', 'user','pssword', {
  host: 'sigestran.database.windows.net',
  dialect: 'mssql',
  dialectOptions: {
    options: {
        encrypt: true,
    }
},

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});*/

//Local db connection
const dbConex = new Sequelize('sgt_PGR', 'admin', 'admin', {
  host: 'localhost',
  dialect: 'mssql',
});

module.exports = dbConex;