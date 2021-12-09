const {
  createAboutMeError,
  modifyAboutMeError,
} = require('../constant/err.type')
const {
  createAboutMes,
  modifyAboutMeData,
  findAllAboutMeData,
} = require('../service/aboutMe.service')
class AboutMeController {
  //! 上传文件到数据库
  async createAboutMe(ctx) {
    try {
      const res = await createAboutMes(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '上传关于我的文件成功',
        result: res,
      }
    } catch (err) {
      console.error('上传关于我的文件失败', err)
      return ctx.app.emit('error', createAboutMeError, ctx)
    }
  }
  //! 修改文件到数据库
  async modifyAboutMe(ctx) {
    try {
      const res = await modifyAboutMeData(ctx.params.id, ctx.request.body)
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改于我的文件成功',
          result: '',
        }
      } else {
        return ctx.app.emit('error', invalidMdID, ctx)
      }
    } catch (err) {
      console.err('修改于我的文件失败', err)
      return ctx.app.emit('error', modifyAboutMeError, ctx)
    }
  }
  //! 获取文件
  async findAllAboutMe(ctx) {
    const res = await findAllAboutMeData()
    ctx.body = {
      code: 0,
      message: '获取关于我的文件成功',
      result: res,
    }
  }
}

module.exports = new AboutMeController()
