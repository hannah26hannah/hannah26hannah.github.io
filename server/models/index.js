'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'db.json'))[env];
const db = {};

let sequelize = new Sequelize(
    config.databse,
    config.username,
    config.password,
    config,
    {
        define: {
            charset: 'utfmb4',
            collate: 'utf8mb4_general_ci'
        }
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.log('Unable to connect to the database.', err);
    });


db.Posts = require('./blogPosts')(sequelize, Sequelize);
db.Tags = require('./tags')(sequelize, Sequelize);
// db.Tags.belongsToMany(db.Posts, {
//     through: 'tagMap',
//     foreignKey: 'tag_id'
// })
// db.Posts.belongsToMany(db.Tags, {
//     through: 'tagMap',
//     foreignKey: 'post_id'
// })

db.Admin = require('./admin')(sequelize, Sequelize);

db.secret = '(9*)5$&!3%^0%^@@2$1!#5@2!4';

module.exports = db;