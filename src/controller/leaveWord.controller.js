const { createLeaveWordError } = require('../constant/err.type')
const {
  createLeaveWords,
  getLeaveWordData,
} = require('../service/leaveWord.service')
class leaveWordController {
  //! 发送评论
  async createLeaveWord(ctx) {
    try {
      const res = await createLeaveWords(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '评论成功',
        result: res,
      }
    } catch (err) {
      console.error('评论失败', err)
      return ctx.app.emit('error', createLeaveWordError, ctx)
    }
  }
  //! 获取评论列表
  async getLeaveWord(ctx) {
    const res = await getLeaveWordData()
    ctx.body = {
      code: 0,
      message: '获取成功',
      result: res,
    }
  }
}

module.exports = new leaveWordController()
