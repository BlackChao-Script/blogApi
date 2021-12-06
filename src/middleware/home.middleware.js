const {
  validatorCarouselError,
  validatorIntroductionError,
} = require('../constant/err.type')
//! 校验上传轮播图数据
const validatorCarousel = async (ctx, next) => {
  try {
    ctx.verifyParams({
      carousel_name: { type: 'string', required: true },
      carousel_src: { type: 'string', required: true },
      carousel_link: { type: 'string', required: true },
    })
  } catch (err) {
    console.error(err)
    validatorCarouselError.result = err
    return ctx.app.emit('error', validatorCarouselError, ctx)
  }
  await next()
}
//! 校验上传简介数据
const validatorIntroduction = async (ctx, next) => {
  try {
    ctx.verifyParams({
      Introduction_sort: { type: 'string', required: true },
      Introduction_text: { type: 'string', required: true },
    })
  } catch (err) {
    console.error(err)
    validatorIntroductionError.result = err
    return ctx.app.emit('error', validatorIntroductionError, ctx)
  }
  await next()
}

module.exports = {
  validatorCarousel,
  validatorIntroduction,
}
