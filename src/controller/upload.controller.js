const path = require('path')
const { fileUploadError } = require('../constant/err.type')

class UploadController {
  //! 文件上传
  async uploads(ctx) {
    const { file } = ctx.request.files
    if (file) {
      ctx.body = {
        code: 0,
        message: '上传成功',
        result: {
          file_path: path.basename(file.path),
        },
      }
    } else {
      return ctx.app.emit('error', fileUploadError, ctx)
    }
  }
}

module.exports = new UploadController()
