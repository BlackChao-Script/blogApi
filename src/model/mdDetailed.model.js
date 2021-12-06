const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
//! 创建表名为 blg_mdDetailed 的表并赋值给 MdDetailed
const MdDetailed = seq.define(
  'blg_mdDetailed',
  {
    content_md: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: 'md文章内容',
    },
    md_id: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: 'md文章id',
    },
  },
  {
    freezeTableName: true,
    createdAt: 'create_time',
    updatedAt: false,
  }
)

// MdDetailed.sync({ force: true })

module.exports = MdDetailed
