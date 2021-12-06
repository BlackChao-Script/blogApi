const Router = require('koa-router')
const md = new Router()
const { auth, hadAdminPermission } = require('../middleware/user.middleware')
const {
  create,
  modify,
  remove,
  findAll,
  createDet,
  findAllDet,
} = require('../controller/md.controller')
const { validator, validatorDet } = require('../middleware/md.middleware')

//! 上传md文件接口
md.post('/', auth, hadAdminPermission, validator, create)
//! 修改md文件接口
md.put('/:id', auth, hadAdminPermission, validator, modify)
//! 删除md文件接口
md.delete('/:id', auth, hadAdminPermission, remove)
//! 获取md文件接口
md.get('/', findAll)
//! 上传md文件详细接口
md.post('/mdDet', auth, hadAdminPermission, validatorDet, createDet)
//! 获取md文件详细接口
md.get('/mdDet', findAllDet)

module.exports = md
