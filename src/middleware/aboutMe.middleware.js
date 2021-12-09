const { validatorMeError } = require('../constant/err.type')

const validatorMe = async (ctx, next) => {
  try {
    ctx.verifyParams({
      me_img: { type: 'string', required: true },
      me_introduce: { type: 'string', required: true },
    })
  } catch (err) {
    console.error(err)
    validatorMeError.result = err
    return ctx.app.emit('error', validatorMeError, ctx)
  }
  await next()
}

module.exports = {
  validatorMe,
}
