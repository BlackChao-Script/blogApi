const Router = require('koa-router')
const leaveWord = new Router()
const {
  createLeaveWord,
  getLeaveWord,
} = require('../controller/leaveWord.controller')

//! 发送评论接口
leaveWord.post('/', createLeaveWord)
//! 获取评论列表数据
leaveWord.get('/', getLeaveWord)

module.exports = leaveWord
