const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Champion extends Model {}

Champion.init(
    {
        id: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lore: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        skins:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        spells:{ 
            type: DataTypes.INTEGER,
            allowNull: false,
            [0]:{
                id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                name:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description:{
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                image:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            [1]:{
                id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                name:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description:{
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                image:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            [2]:{
                id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                name:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description:{
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                image:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            [3]:{
                id: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                name:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description:{
                    type: DataTypes.TEXT,
                    allowNull: false,
                },
                image:{
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
        },
        passive:{
            type: DataTypes.STRING,
            allowNull: false,
            name:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            description:{
                type: DataTypes.TEXT,
                allowNull: false,
            },
            image:{
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
    },
    {
		sequelize,
		freezeTableName: true,
		underscored: false,
		modelName: 'champion',
	} 
)

module.exports = Champion;