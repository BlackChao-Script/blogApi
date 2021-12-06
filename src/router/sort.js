const Router = require('koa-router')
const sort = new Router()
const {
  findSortData,
  findSortDataDet,
} = require('../controller/sort.controller')
//! 获取分类数据接口
sort.get('/', findSortData)
//! 获取分类详细接口
sort.get('/sortDet', findSortDataDet)

module.exports = sort
