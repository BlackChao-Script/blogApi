const User = require('../model/user.model')

class UserService {
  //! 创建用户
  async createUser(user_name, password) {
    const res = await User.create({ user_name, password })
    return res.dataValues
  }
  //! 查找 test_user 表
  async getUerInfo({ ...arg }) {
    const whereOpt = { ...arg }
    const res = await User.findOne({
      attributes: ['id', 'user_name', 'password', 'is_admin'],
      where: whereOpt,
    })
    return res ? res.dataValues : null
  }
  //! 根据id查找用户更新密码
  async updateById({ id, ...arg }) {
    const whereOpt = { id }
    const newUser = { ...arg }
    const res = await User.update(newUser, { where: whereOpt })
    return res[0] > 0 ? true : false
  }
  //! 根据用户名获取用户信息
  async getuserDatas(user_name) {
    const res = await User.findOne({
      attributes: ['user_img'],
      where: { user_name },
    })
    return res ? res.dataValues : null
  }
}

module.exports = new UserService()
