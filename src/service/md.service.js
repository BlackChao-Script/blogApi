const MarkDown = require('../model/markdown.model')
const MdDetailed = require('../model/mdDetailed.model')
class MdService {
  //! 创建MarkDown文章数据
  async createMarkDown(markdown) {
    const res = await MarkDown.create(markdown)
    return res.dataValues
  }
  //! 根据id修改MarkDown文章数据
  async modifyMd(id, markdown) {
    const res = await MarkDown.update(markdown, { where: { id } })
    return res[0] > 0 ? true : false
  }
  //! 根据id删除MarkDown文章数据
  async removeMd(id) {
    const res = await MarkDown.destroy({ where: { id } })
    return res[0] > 0 ? true : false
  }
  //! 根据paegNum, pageSize查找MarkDown文章数据
  async findMd(paegNum, pageSize) {
    const count = await MarkDown.count()
    const offset = (paegNum - 1) * pageSize
    const rows = await MarkDown.findAll({ offset: offset, limit: pageSize * 1 })
    return {
      paegNum,
      pageSize,
      total: count,
      list: rows,
    }
  }
  //! 创建详细MarkDown文章数据
  async createMarkDownDet(markdown) {
    const res = await MdDetailed.create(markdown)
    return res.dataValues
  }
  //! 根据id查找详细MarkDown文章数据
  async findAllDet(md_id) {
    const res = await MdDetailed.findOne({
      attributes: ['id', 'content_md', 'create_time'],
      where: { md_id },
    })
    return res ? res.dataValues : null
  }
  //! 查找md文件详细列表数据
  async getAllListDetData(paegNum, pageSize) {
    const count = await MdDetailed.count()
    const offset = (paegNum - 1) * pageSize
    const rows = await MdDetailed.findAll({
      offset: offset,
      limit: pageSize * 1,
    })
    return {
      paegNum,
      pageSize,
      total: count,
      list: rows,
    }
  }
}

module.exports = new MdService()
