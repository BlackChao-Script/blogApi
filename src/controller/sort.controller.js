const { findSortDatas, findSortDataDets } = require('../service/sort.service')
const {
  findSortDatasError,
  findSortDataDetsError,
} = require('../constant/err.type')
class SortController {
  //! 获取分类数据
  async findSortData(ctx) {
    try {
      const res = await findSortDatas()
      ctx.body = {
        code: 0,
        message: '获取分类数据成功',
        result: res,
      }
    } catch (err) {
      console.error('获取分类数据失败', err)
      return ctx.app.emit('error', findSortDatasError, ctx)
    }
  }
  //! 获取分类详细数据
  async findSortDataDet(ctx) {
    try {
      const { sort_id } = ctx.request.query
      const res = await findSortDataDets(sort_id)
      ctx.body = {
        code: 0,
        message: '获取分类详细数据成功',
        result: res,
      }
    } catch (err) {
      console.error('获取分类详细数据失败', err)
      return ctx.app.emit('error', findSortDataDetsError, ctx)
    }
  }
}

module.exports = new SortController()
