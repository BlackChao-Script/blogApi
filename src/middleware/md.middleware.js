const { markdownFormatError } = require('../constant/err.type')

//! 校验上传文章数据
const validator = async (ctx, next) => {
  try {
    ctx.verifyParams({
      markdown_name: { type: 'string', required: true },
      markdown_img: { type: 'string', required: true },
      markdown_title: { type: 'string', required: true },
      sort_id: { type: 'number', required: true },
      article_user: { type: 'string', required: true },
      sort_class: { type: 'string', required: true },
    })
  } catch (err) {
    console.error(err)
    markdownFormatError.result = err
    return ctx.app.emit('error', markdownFormatError, ctx)
  }
  await next()
}
//! 校验上传文章详细数据
const validatorDet = async (ctx, next) => {
  try {
    ctx.verifyParams({
      content_md: { type: 'string', required: true },
      md_id: { type: 'string', required: true },
    })
  } catch (err) {
    console.error(err)
    markdownFormatError.result = err
    return ctx.app.emit('error', markdownFormatError, ctx)
  }
  await next()
}

module.exports = {
  validator,
  validatorDet,
}
