const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
//! 创建表名为 blg_aboutMe 的表并赋值给 aboutMe
const aboutMe = seq.define(
  'blg_aboutMe',
  {
    me_img: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '我的照片',
    },
    me_introduce: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '我的介绍',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// aboutMe.sync({ force: true })

module.exports = aboutMe
