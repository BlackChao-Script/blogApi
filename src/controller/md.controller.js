const { readFileSync } = require('fs')
const { resolve } = require('path')
const {
  createMarkDownError,
  modifyMdError,
  invalidMdID,
  removeMdError,
} = require('../constant/err.type')
const {
  createMarkDown,
  modifyMd,
  removeMd,
  findMd,
  createMarkDownDet,
  findAllDet,
} = require('../service/md.service')
class MdController {
  //! 上传文件到数据库
  async create(ctx) {
    try {
      const res = await createMarkDown(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '上传markdown文件成功',
        result: res,
      }
    } catch (err) {
      console.error('上传markdown文件失败', err)
      return ctx.app.emit('error', createMarkDownError, ctx)
    }
  }
  //! 修改文件
  async modify(ctx) {
    try {
      const res = await modifyMd(ctx.params.id, ctx.request.body)
      if (res) {
        ctx.body = {
          code: 0,
          message: '修改markdown文件成功',
          result: '',
        }
      } else {
        return ctx.app.emit('error', invalidMdID, ctx)
      }
    } catch (err) {
      console.err('修改markdown文件失败', err)
      return ctx.app.emit('error', modifyMdError, ctx)
    }
  }
  //! 删除文件
  async remove(ctx) {
    try {
      await removeMd(ctx.params.id)
      ctx.body = {
        code: 0,
        message: '删除markdown文件成功',
        result: '',
      }
    } catch (err) {
      console.err('删除markdown文件失败', err)
      return ctx.app.emit('error', removeMdError, ctx)
    }
  }
  //! 获取文件
  async findAll(ctx) {
    const { paegNum = 1, pageSize = 6 } = ctx.request.query
    const res = await findMd(paegNum, pageSize)
    ctx.body = {
      code: 0,
      message: '获取文件成功',
      result: res,
    }
  }
  //! 上传文件详细
  async createDet(ctx) {
    try {
      const res = await createMarkDownDet(ctx.request.body)
      ctx.body = {
        code: 0,
        message: '上传markdown详细文件成功',
        result: res,
      }
    } catch (err) {
      console.error('上传markdown详细文件失败', err)
      return ctx.app.emit('error', createMarkDownError, ctx)
    }
  }
  //! 获取详细文件
  async findAllDet(ctx) {
    const { md_id } = ctx.request.query
    const res = await findAllDet(md_id)
    const data = readFileSync(
      resolve(__dirname, `../assets/uploads/${res.content_md}`),
      'utf-8'
    )
    res.content_md = data
    ctx.body = {
      code: 0,
      message: '获取详细文件成功',
      result: res,
    }
  }
}

module.exports = new MdController()
