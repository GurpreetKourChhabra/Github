var Sequelize = require('sequelize');
var conn = new Sequelize('review' ,'root', '' , {
    dialect: 'mysql',
    'host': "localhost",
    "port": "3006",
    define: {
        timestamps: false
    }
} );
const post = conn.define('posts' , {
    id: {type: Sequelize.INTEGER ,primaryKey: true,autoIncrement: true},
    comment: Sequelize.STRING,
    image: Sequelize.STRING,
    time: Sequelize.STRING
});

module.exports = post;
