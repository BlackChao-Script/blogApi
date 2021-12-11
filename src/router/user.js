const Router = require('koa-router')
const user = new Router()
const {
  register,
  login,
  changePassword,
  getuserData,
} = require('../controller/user.controller')
//! 引入中间件
const {
  userValidator,
  verifyUser,
  crpytPassword,
  verifyLogin,
  auth,
} = require('../middleware/user.middleware')

//! 注册接口
user.post('/register', userValidator, verifyUser, crpytPassword, register)
//! 登录接口
user.post('/login', userValidator, verifyLogin, login)
//! 修改密码接口
user.patch('/modify', auth, crpytPassword, changePassword)
//! 获取用户信息
user.get('/', getuserData)

module.exports = user
