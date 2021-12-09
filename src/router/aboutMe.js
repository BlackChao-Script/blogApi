const Router = require('koa-router')
const aboutMe = new Router()
const { auth, hadAdminPermission } = require('../middleware/user.middleware')
const { validatorMe } = require('../middleware/aboutMe.middleware')
const {
  createAboutMe,
  modifyAboutMe,
  findAllAboutMe,
} = require('../controller/aboutMe.controller')
//! 上传关于我的数据接口
aboutMe.post('/', auth, hadAdminPermission, validatorMe, createAboutMe)
//! 修改关于我的数据接口
aboutMe.put('/:id', auth, hadAdminPermission, validatorMe, modifyAboutMe)
//! 获取关于我的数据接口
aboutMe.get('/', findAllAboutMe)

module.exports = aboutMe
