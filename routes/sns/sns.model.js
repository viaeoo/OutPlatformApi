const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

// define sequelize sns table
const Sns = sequelize.define('SNS', {
  sns_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  sns_name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sns_url: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  club_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timestamps: false,
});

module.exports = Sns;
