const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
//! 创建表名为 blg_leaveWord 的表并赋值给 leaveWord
const leaveWord = seq.define(
  'blg_leaveWord',
  {
    leaveWord_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '留言用户',
    },
    leaveWord_text: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      comment: '留言内容',
    },
    leaveWord_img: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      comment: '留言用户头像',
    },
  },
  {
    freezeTableName: true,
    createdAt: 'leaveWord_time',
    updatedAt: false,
  }
)

// leaveWord.sync({ alter: true })

module.exports = leaveWord
