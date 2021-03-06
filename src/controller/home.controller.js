const {
  createCarouselError,
  getCarouselError,
  createIntroductionError,
  getIntroductionError,
  getIconError,
  invalidCarouselID,
  modifyCarousel,
  invalidIntroductionID,
  modifyIntroductionError,
  removeCarouselError,
  invalidIconID,
  modifyIconError,
} = require('../constant/err.type')
const {
  createCarousel,
  getCarouselData,
  createIntroductions,
  getIntroductionData,
  getIconData,
  modifyIntroductionData,
  removeCarouselData,
  modifyCarouselData,
  modifyIconData,
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
  //! 修改轮播图数据
  async modifyCarousel(ctx) {
    try {
      const res = await modifyCarouselData(ctx.params.id, ctx.request.body)
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改轮播图数据成功',
          result: '',
        }
      } else {
        return ctx.app.emit('error', invalidCarouselID, ctx)
      }
    } catch (err) {
      console.error('修改轮播图文件失败', err)
      return ctx.app.emit('error', modifyCarousel, ctx)
    }
  }
  //! 删除轮播图数据
  async removeCarousel(ctx) {
    try {
      await removeCarouselData(ctx.params.id)
      ctx.body = {
        code: 0,
        message: '删除轮播图数据成功',
      }
    } catch (err) {
      console.error('删除轮播图数据失败', err)
      ctx.app.emit('errpr', removeCarouselError, ctx)
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
  //! 修改简介数据
  async modifyIntroduction(ctx) {
    try {
      const res = await modifyIntroductionData(ctx.params.id, ctx.request.body)
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改简介数据成功',
          result: '',
        }
      } else {
        return ctx.app.emit('error', invalidIntroductionID, ctx)
      }
    } catch (err) {
      console.error('修改简介失败', err)
      return ctx.app.emit('error', modifyIntroductionError, ctx)
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
  //! 修改图标数据
  async modifyIcon(ctx) {
    try {
      const res = await modifyIconData(ctx.params.id, ctx.request.body)
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改图标数据成功',
          result: '',
        }
      } else {
        return ctx.app.emit('error', invalidIconID, ctx)
      }
    } catch (err) {
      console.error('修改图标数据失败', err)
      return ctx.app.emit('error', modifyIconError, ctx)
    }
  }
}

module.exports = new HomeController()
