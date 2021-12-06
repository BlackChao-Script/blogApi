const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
//! 创建表名为 blg_carousel 的表并赋值给 Carousel
const Carousel = seq.define(
  'blg_carousel',
  {
    carousel_name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '轮播图名称',
    },
    carousel_src: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '轮播图图片地址',
    },
    carousel_link: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '轮播图链接地址',
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
)

// Carousel.sync({ force: true })

module.exports = Carousel
