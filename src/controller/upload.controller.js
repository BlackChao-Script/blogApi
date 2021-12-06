const path = require('path')
const { fileUploadError, fileTypesError } = require('../constant/err.type')

class UploadController {
  //! 图片上传
  async uploads(ctx) {
    const { file } = ctx.request.files
    // console.log(file)
    const fileTypes = ['image/jpeg', 'image/png', 'text/markdown']
    if (file) {
      if (!fileTypes.includes(file.type)) {
        return ctx.app.emit('error', fileTypesError, ctx)
      }
      ctx.body = {
        code: 0,
        message: '上传成功',
        result: {
          goods_img: path.basename(file.path),
        },
      }
    } else {
      return ctx.app.emit('error', fileUploadError, ctx)
    }
  }
}

module.exports = new UploadController()
