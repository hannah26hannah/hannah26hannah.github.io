const express = require('express');
const app = express();

const sequelize = require('./models').sequelize;
const bodyParser = require('body-parser');
sequelize.sync();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// 생성한 Posts라는 테이블을 서버로 가져와 읽는 코드
const {
    Tags,
    sequelize: { Op }
} = require('./models');
sequelize.query('SET tagName utf8;'); 

// 위 코드를 통해 Tags 테이블을 서버로부터 읽어들이고, 읽기가 가능한 테이블은 'create' 메소드를 통해서  데이터를 추가한다. 

app.post('/add/data', (req, res) => { 
    console.log(req.body)
    // Tags 테이블의 tagName 컬럼에 클라이언트로부터 넘어온 req.body.data 값을 추가한다. 클라이언트에서 보낸 키 이름과 서버에서 받아오는 키의 이름이 같아야 한다. 
    Tags.create({
        tagName: req.body.data
    })
        .then(result => { 
            res.send(result)
        })
        .catch(err => { 
            console.log(err)
            throw err;
        })
})

// app.get('/get/data', (req, res) => { 
//     Tags.findAll()
//         .then(result => { res.send(result) })
//         .catch(err => { throw err })
// })

// 특정 데이터만 조회하고자 할 때
// app.get('/get/data', (req, res) => { 
//     Tags.findAll({
//         where: { tagName: 'TypeScript'}
//     })
//     .then(result => { res.send(result) })
//     .catch(err => { throw err })
// })

// Number가 1인 데이터와 tagName이 Express인 데이터를 같이 가지고 오고자 할 때
// Cannot read property 'or' of undefined [Error Occured]
app.get('/get/data', (req, res) => { 
    Tags.findAll({
        where: { [Op.or]: [{ tagName: 'JavaScript' }, { tagName: 'Express' }] }
    })
    .then(result => { res.send(result) })
    .catch(err => { throw err })
})


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => { 
    console.log(`Server On : http://localhost:${PORT}`)
})