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
    skins: {
      type: DataTypes.JSON, // change to JSON data type
      allowNull: false,
    },
    spells: {
      type: DataTypes.JSON, // change to JSON data type
      allowNull: false,
    },
    passive: {
      type: DataTypes.JSON, // change to JSON data type
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true, // change to underscored naming convention
    modelName: 'champion',
  } 
);

module.exports = Champion;