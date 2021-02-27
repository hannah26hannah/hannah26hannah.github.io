const sequelize = require('./models').sequelize;
const { Op } = require('sequelize')

const { Tags } = require('./models');
sequelize.query('SET tagName utf8;'); 

const { Admin, Posts } = require('./models');
sequelize.query('SET NAME utf8;')


module.exports = {
    api: {
        getData : callback => {
            Tags.findAll()
                .then(result => { callback(result) })
                .catch(err => { throw err })
        },
        searchInfo: (body, hash, callback) => {
            Admin.findAll({
                where: { [Op.and] : [{ name : body.name, password: hash }]}
            })
            .then(data => {
                callback(data)
            })
            .catch(err => {
                throw err;
            })
        },
        addPost : (body, callback) => {
            Posts.create({
                title: body.title,
                category: body.category,
                contents: body.content,
                date: new Date()
            })
            .then(data => {
                callback(true)
            })
            .catch(err => {
                throw err;
            })
        }
    }
}
