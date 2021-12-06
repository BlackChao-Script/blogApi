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
  //! 查找图标数据
  async getIconData() {
    const res = await Icon.findAll()
    return {
      list: res,
    }
  }
}

module.exports = new HomeService()
