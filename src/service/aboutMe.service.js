const aboutMe = require('../model/aboutMe.model')

class AboutService {
  //! 创建关于我的数据
  async createAboutMes(aboutme) {
    const res = await aboutMe.create(aboutme)
    return res.dataValues
  }
  //! 根据id修改
  async modifyAboutMeData(id, aboutme) {
    const res = await aboutMe.update(aboutme, { where: { id } })
    return res[0] > 0 ? true : false
  }
  //! 查找关于我的数据
  async findAllAboutMeData() {
    const res = await aboutMe.findAll()
    return res
  }
}

module.exports = new AboutService()
