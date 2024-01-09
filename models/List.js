const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class List extends Model {}

List.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        items: {
           type: DataTypes.STRING,
            // type: DataTypes.ARRAY(DataTypes.JSON),
            // defaultValue: []
        },
        email: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'email',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'list',
    }
);

module.exports = List
