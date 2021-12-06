const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
//! 创建表名为 blg_sort 的表并赋值给 Sort
const Sort = seq.define(
  'blg_sort',
  {
    sort_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '分类名称',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// Sort.sync({ force: true })

module.exports = Sort
