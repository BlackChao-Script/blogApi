const Router = require('koa-router')
const upload = new Router()
const { auth, hadAdminPermission } = require('../middleware/user.middleware')
const { uploads } = require('../controller/upload.controller')


//! 上传图片接口
upload.post('/', auth, hadAdminPermission, uploads)

module.exports = upload
