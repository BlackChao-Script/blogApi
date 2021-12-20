const Router = require('koa-router')
const leaveWord = new Router()
const { auth, hadAdminPermission } = require('../middleware/user.middleware')
const {
  createLeaveWord,
  getLeaveWord,
  removeLeaveWord,
} = require('../controller/leaveWord.controller')

//! 发送评论接口
leaveWord.post('/', createLeaveWord)
//! 获取评论列表数据
leaveWord.get('/', getLeaveWord)
//! 删除评论数据
leaveWord.delete('/:id', auth, hadAdminPermission, removeLeaveWord)

module.exports = leaveWord
