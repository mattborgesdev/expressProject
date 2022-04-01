const Sequelize = require('sequelize');

// Conexão com o Banco de Dados Mysql
const sequelize = new Sequelize('postapp', 'root', '206918', {
    host: "localhost",
    dialect: "mysql",
    query: {raw: true}
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}