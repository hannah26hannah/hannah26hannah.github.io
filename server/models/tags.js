module.exports = (sequelize, DataTypes) => { 
    return sequelize.define(
        'tags',
        {
            tagName: {
                type: DataTypes.STRING(50),
                allowNull: true
            },
        },
        {
            charset: 'utf8mb4',
            collate: 'utf8mb4_general_ci',
            timestamps: false
        }
    )
}