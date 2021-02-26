const sequelize = require('./models').sequelize;
const { Op } = require('sequelize')

const {
    Tags,
    // sequelize: { Op }
} = require('./models');
sequelize.query('SET tagName utf8;'); 

const {
    Admin, 
    // sequelize: { Op }
} = require('./models');
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
        }

        // addData : callback => {
        //     Tags.create({ tagName: req.body.data })
        // }
    }
}
