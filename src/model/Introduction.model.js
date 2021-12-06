const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
//! 创建表名为 blg_introduction 的表并赋值给 Introduction
const Introduction = seq.define(
  'blg_introduction',
  {
    Introduction_sort: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '简介分类',
    },
    Introduction_text: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '简介内容',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// Introduction.sync({ force: true })

module.exports = Introduction
