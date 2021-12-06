const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
//! 创建表名为 blg_md 的表并赋值给 MarkDown
const MarkDown = seq.define(
  'blg_md',
  {
    markdown_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'md文章名',
    },
    article_user: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '发布者',
    },
    markdown_title: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'md文章标题',
    },
    markdown_img: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'md图片',
    },
    sort_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      comment: '分类id',
    },
    sort_class: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '分类别名',
    },
  },
  {
    // 强制表名等于模型名
    freezeTableName: true,
    createdAt: 'create_time',
    updatedAt: false,
  }
)



// MarkDown.sync({ alter: true })

module.exports = MarkDown
