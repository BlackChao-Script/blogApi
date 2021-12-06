const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
//! 创建表名为 blg_carousel 的表并赋值给 Carousel
const Icon = seq.define(
  'blg_icon',
  {
    icon_src: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '图标地址',
    },
    icon_link: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '图标链接',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// Icon.sync({ force: true })

module.exports = Icon
