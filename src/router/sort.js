const Router = require('koa-router')
const sort = new Router()
const { auth, hadAdminPermission } = require('../middleware/user.middleware.js')
const {
  findSortData,
  createSort,
  modifySort,
  removeSort,
  findSortDataDet,
} = require('../controller/sort.controller')
//! 获取分类数据接口
sort.get('/', findSortData)
//! 添加分类数据接口
sort.post('/', auth, hadAdminPermission, createSort)
//! 修改分类数据接口
sort.put('/:id', auth, hadAdminPermission, modifySort)
//! 删除分类数据接口
sort.delete('/:id', auth, hadAdminPermission, removeSort)
//! 获取分类详细接口
sort.get('/sortDet', findSortDataDet)

module.exports = sort
