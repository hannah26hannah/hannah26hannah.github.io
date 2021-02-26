const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
        'admin', // table name
        {
            id: { // column of 'admin' table
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true
            },
            password: {
                type: DataTypes.STRING(100),
                allowNull: false
            }
        },
        {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            timestamps: false
        }
    )
}