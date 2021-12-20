const Carousel = require('../model/carousel.model')
const Introduction = require('../model/Introduction.model')
const Icon = require('../model/icon.model')

class HomeService {
  //! 上传轮播图数据到数据表
  async createCarousel(carousel) {
    const res = await Carousel.create(carousel)
    return res.dataValues
  }
  //! 查找轮播图数据
  async getCarouselData() {
    const res = await Carousel.findAll()
    return {
      list: res,
    }
  }
  //! 根据id修改轮播图数据
  async modifyCarouselData(id, carousel) {
    const res = await Carousel.update(carousel, { where: { id } })
    return res[0] > 0 ? true : false
  }
  //! 根据id删除轮播图数据
  async removeCarouselData(id) {
    const res = await Carousel.destroy({ where: { id } })
    return res[0] > 0 ? true : false
  }
  //! 上传简介到数据表
  async createIntroductions(introductions) {
    const res = await Introduction.create(introductions)
    return res.dataValues
  }
  //! 查找简介数据
  async getIntroductionData() {
    const res = await Introduction.findAll()
    return {
      list: res,
    }
  }
  //! 修改简介数据
  async modifyIntroductionData(id, introduction) {
    const res = await Introduction.update(introduction, { where: { id } })
    return res[0] > 0 ? true : false
  }
  //! 查找图标数据
  async getIconData() {
    const res = await Icon.findAll()
    return {
      list: res,
    }
  }
  //! 修改图标数据
  async modifyIconData(id, icon) {
    const res = await Icon.update(icon, { where: { id } })
    return res[0] > 0 ? true : false
  }
}

module.exports = new HomeService()
