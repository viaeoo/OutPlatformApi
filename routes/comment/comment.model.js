const sequelize = require('../sequelize.js');
const Sequelize = require('sequelize');

// Define sequelize comments table
const Comment = sequelize.define('COMMENT', {
  comment_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  comment_contents: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  club_rating: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  comment_update: {
    type: Sequelize.DATE,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  mem_id: {
    type: Sequelize.INTEGER,
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

module.exports = Comment;
