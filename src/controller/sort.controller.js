const {
  findSortDatas,
  findSortDataDets,
  createSortData,
  modifySortData,
  removeSortData,
  getAllSortListDetData,
} = require('../service/sort.service')
const {
  findSortDatasError,
  createSortError,
  invalidSortID,
  modifySortError,
  removeSortError,
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
  //! 添加分类数据
  async createSort(ctx) {
    try {
      const res = await createSortData(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '添加分类成功',
        result: res,
      }
    } catch (err) {
      console.error('添加分类数据失败', err)
      return ctx.app.emit('error', createSortError, ctx)
    }
  }
  //! 修改分类数据
  async modifySort(ctx) {
    try {
      const res = await modifySortData(ctx.params.id, ctx.request.body)
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改分类数据成功',
          result: '',
        }
      } else {
        return ctx.app.emit('error', invalidSortID, ctx)
      }
    } catch (err) {
      console.error('修改分类数据失败', err)
      return ctx.app.emit('error', modifySortError, ctx)
    }
  }
  //! 删除分类数据
  async removeSort(ctx) {
    try {
      await removeSortData(ctx.params.id)
      ctx.body = {
        code: 0,
        message: '删除分类数据成功',
        result: '',
      }
    } catch (err) {
      console.error('删除分类数据失败', err)
      return ctx.app.emit('error', removeSortError, ctx)
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
