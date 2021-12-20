const leaveWord = require('../model/leaveWord.model')

class leaveWordService {
  //! 发送评论数据
  async createLeaveWords(leaveWordData) {
    const res = await leaveWord.create(leaveWordData)
    return res.dataValues
  }
  //! 获取评论数据
  async getLeaveWordData() {
    const res = await leaveWord.findAll()
    return res
  }
  //! 删除评论数据
  async removeLeaveWordData(id) {
    const res = await leaveWord.destroy({ where: { id } })
    return res[0] > 0 ? true : false
  }
}

module.exports = new leaveWordService()
