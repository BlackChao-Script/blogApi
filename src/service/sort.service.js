const Sort = require('../model/sort.model')
const MarkDown = require('../model/markdown.model')

class SortService {
  //! 查找分类数据
  async findSortDatas() {
    const res = await Sort.findAll()
    return {
      list: res,
    }
  }
  //! 添加分类数据
  async createSortData(sort) {
    const res = await Sort.create(sort)
    return res.dataValues
  }
  //! 修改分类数据
  async modifySortData(id, sort) {
    const res = await Sort.update(sort, { where: { id } })
    return res[0] > 0 ? true : false
  }
  //! 删除分类数据
  async removeSortData(id) {
    const res = await Sort.destroy({ where: { id } })
    return res[0] > 0 ? true : false
  }
  //! 查找分类详细数据
  async findSortDataDets(sort_id) {
    const res = await MarkDown.findAll({ where: { sort_id } })
    return {
      list: res,
    }
  }
}

module.exports = new SortService()
