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
  modifyCarousel,
  removeCarousel,
  createIntroduction,
  getIntroduction,
  modifyIntroduction,
  getIcon,
  modifyIcon,
} = require('../controller/home.controller')
//! 上传轮播图接口
home.post('/carousel', auth, hadAdminPermission, validatorCarousel, create)
//! 获取轮播图接口
home.get('/carousel', getCarousel)
//! 修改轮播图接口
home.put(
  '/carousel/:id',
  auth,
  hadAdminPermission,
  validatorCarousel,
  modifyCarousel
)
//! 删除轮播图接口
home.delete('/carousel/:id', auth, hadAdminPermission, removeCarousel)
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
//! 修改简介数据接口
home.put('/introduction/:id', auth, hadAdminPermission, modifyIntroduction)
//! 获取个人地址图标
home.get('/icon', getIcon)
//! 修改个人地址图标
home.put('/icon/:id', auth, hadAdminPermission, modifyIcon)

module.exports = home
