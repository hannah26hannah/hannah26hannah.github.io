const sequelize = require('./models').sequelize;
const { Op } = require('sequelize')

const { Tags } = require('./models');
sequelize.query('SET tagName utf8;'); 

const { Admin } = require('./models');
sequelize.query('SET NAME utf8;')

const { Posts } = require('./models');
sequelize.query('SET TITLE utf8')


module.exports = {
    api: {
        getData : callback => {
            Tags.findAll()
                .then(result => { callback(result) })
                .catch(err => { throw err })
        },
        getPost : callback => {
            Posts.findAll()
                .then(result => { callback(result) })
                .catch(err => { throw err })
        },
        // getPostCnt : callback => {
        //     Posts.count()
        //         .then(result => {
        //             callback(result);
        //         })
        // },
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
        },
        
    }
}
