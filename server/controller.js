const path = require('path');
const AWS = require('aws-sdk');
const model = require('./model')
const hashing = require(path.join(__dirname, 'config', 'hashing.js'))
const salt = require(path.join(__dirname, 'config', 'db.json')).salt;


AWS.config.loadFromPath(
    path.join(__dirname, 'config', 'awsConfig.json')
);

module.exports = {
    needs: () => upload,
    api: {
        getData: (req, res) => {
            model.api.getData( data => {
                return res.send(data)
            })
        },
        sendPw: (req, res) => {
            const body = req.body;
            const hash = hashing.enc(body.name, body.password, salt)

            model.api.searchInfo(body, hash, result => {
                let obj = {};
                if(result[0]) {
                    obj['suc'] = true;
                    obj['msg'] = 'Login Success'
                } else {
                    obj['suc'] = false;
                    obj['msg'] = 'Login Fail'
                }
                res.send(obj)
            })
            console.log('1. salt 값', salt);
            console.log('2. hash 결과', hash)
        },
        
        // addDate: (req, res) => {
        //     model.api.addData( data => {
        //         return res.send(data)
        //     })
        // },
        // modifyData: (req, res) => {},
        // deleteData: (req, res) => {},
    }
}