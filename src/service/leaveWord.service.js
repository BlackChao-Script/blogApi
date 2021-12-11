const leaveWord = require('../model/leaveWord.model')

class leaveWordService {
  async createLeaveWords(leaveWordData) {
    const res = await leaveWord.create(leaveWordData)
    return res.dataValues
  }
  async getLeaveWordData() {
    const res = await leaveWord.findAll()
    return res
  }
}

module.exports = new leaveWordService()
