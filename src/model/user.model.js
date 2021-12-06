const { DataTypes } = require('sequelize')
const seq = require('../db/seq')
//! 创建表名为 blg_user 的表并赋值给 User
const User = seq.define(
  'blg_user',
  {
    // id 会被 sequelize 自动创建，管理
    user_name: {
      // 类型
      type: DataTypes.STRING,
      // 字段是否允许为空
      allowNull: false,
      // 字段是唯一的
      unique: true,
      // 表的注释
      comment: '用户名，唯一',
    },
    password: {
      type: DataTypes.CHAR(64),
      allowNull: false,
      comment: '密码',
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      // 默认值 设为0
      defaultValue: 0,
      comment: '是否为管理员,0:不是管理员(默认);1:为管理员',
    },
  },
  {
    // 强制表名等于模型名
    freezeTableName: true,
    // 关闭生成时间戳字段
    timestamps: false,
  }
)
// 模型同步 如果表不存在,则创建该表(如果已经存在,则不执行任何操作)， 加上{ force: true } ：如果表已经存在，则将其首先删除
// User.sync({ force: true })

module.exports = User
