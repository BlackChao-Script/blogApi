const {
  createCarouselError,
  getCarouselError,
  createIntroductionError,
  getIntroductionError,
  getIconError,
} = require('../constant/err.type')
const {
  createCarousel,
  getCarouselData,
  createIntroductions,
  getIntroductionData,
  getIconData,
} = require('../service/home.service')
class HomeController {
  //! 上传轮播图文件到数据库
  async create(ctx) {
    try {
      const res = await createCarousel(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '上传轮播图文件成功',
        result: res,
      }
    } catch (err) {
      console.error('上传轮播图文件成功', err)
      return ctx.app.emit('error', createCarouselError, ctx)
    }
  }
  //! 获取轮播图数据
  async getCarousel(ctx) {
    try {
      const res = await getCarouselData()
      ctx.body = {
        code: 0,
        message: '获取轮播图数据成功',
        result: res,
      }
    } catch (err) {
      console.error('获取轮播图数据失败', err)
      ctx.app.emit('error', getCarouselError, ctx)
    }
  }
  //! 上传简介数据到数据库
  async createIntroduction(ctx) {
    try {
      const res = await createIntroductions(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '上传简介数据成功',
        result: res,
      }
    } catch (err) {
      console.error('上传简介数据成功', err)
      return ctx.app.emit('error', createIntroductionError, ctx)
    }
  }
  //! 获取简介数据
  async getIntroduction(ctx) {
    try {
      const res = await getIntroductionData()
      ctx.body = {
        code: 0,
        message: '获取简介数据成功',
        result: res,
      }
    } catch (err) {
      console.error('获取简介数据失败', err)
      ctx.app.emit('error', getIntroductionError, ctx)
    }
  }
  //! 获取图标数据
  async getIcon(ctx) {
    try {
      const res = await getIconData()
      ctx.body = {
        code: 0,
        message: '获取图标数据成功',
        result: res,
      }
    } catch (err) {
      console.error('获取图标数据失败', err)
      ctx.app.emit('error', getIconError, ctx)
    }
  }
}

module.exports = new HomeController()
