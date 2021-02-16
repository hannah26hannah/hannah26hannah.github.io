const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => { 
    return sequelize.define( // Sequelize는 컬럼의 id를 지정하지 않아도 테이블이 생성딜 때 자동으로 id를 부여한다. 
        'posts', // Table Name
        {
            title: { // Column of 'posts' Table
                type: DataTypes.STRING(50), // [CHAR, VARCHAR]
                allowNull: false
            },
        },
        {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            timestamps: false
        }
    )
}