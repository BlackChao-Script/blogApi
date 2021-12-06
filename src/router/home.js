const Router = require('koa-router')
const home = new Router()
const { auth, hadAdminPermission } = require('../middleware/user.middleware')
const {
  validatorCarousel,
  validatorIntroduction,
} = require('../middleware/home.middleware')
const {
  create,
  getCarousel,
  createIntroduction,
  getIntroduction,
  getIcon,
} = require('../controller/home.controller')
//! 上传轮播图接口
home.post('/carousel', auth, hadAdminPermission, validatorCarousel, create)
//! 获取轮播图接口
home.get('/carousel', getCarousel)
//! 上传简介数据接口
home.post(
  '/introduction',
  auth,
  hadAdminPermission,
  validatorIntroduction,
  createIntroduction
)
//! 获取简介数据接口
home.get('/introduction', getIntroduction)
home.get('/icon', getIcon)

module.exports = home
