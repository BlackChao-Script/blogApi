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
  //! 查找分类详细数据
  async findSortDataDets(sort_id) {
    const res = await MarkDown.findAll({ where: { sort_id } })
    return {
      list: res,
    }
  }
}

module.exports = new SortService()
