const path = require('path');
const sequelize = require(path.join(__dirname, '../sequelize.js'));
const Sequelize = require('sequelize');

const Site_statistic = sequelize.define('SITE_STATISTIC', {
  date : {
    type: Sequelize.DATE,
    primaryKey: true,
    allowNull : false,
    validate: {
      isDate: true,
    }
  },
  site_connect_count: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  site_pc_connect_count: {
    type: Sequelize.INTEGER,
    allowNull : false
  },
  site_mobile_connect_count: {
    type: Sequelize.INTEGER,
    allowNull : false
  }
}, {
  freezeTableName: true,
  timestamps: false
});

module.exports = Site_statistic;
