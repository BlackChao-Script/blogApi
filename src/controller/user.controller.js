const jwt = require('jsonwebtoken')
const {
  createUser,
  getUerInfo,
  updateById,
  getuserDatas,
} = require('../service/user.service')
const { JWT_SECRET } = require('../constant/data')
const { updatePassowrdError } = require('../constant/err.type')

class UserController {
  //! 注册
  async register(ctx) {
    // 保存数据
    const { user_name, password } = ctx.request.body
    // 操作数据库
    const res = await createUser(user_name, password)
    // 返回结果
    ctx.body = {
      code: 0,
      message: '用户注册成功',
      result: {
        id: res.id,
        user_name: res.user_name,
      },
    }
  }
  //! 登录
  async login(ctx) {
    const { user_name } = ctx.request.body
    // 获取用户信息(在token的payload中, 记录id, user_name, is_admin)
    try {
      // 从返回结果对象中剔除password属性, 将剩下的属性放到res对象
      const { password, ...res } = await getUerInfo({ user_name })
      ctx.body = {
        code: 0,
        message: '用户登录成功',
        result: {
          //* JWT_SECRET 密钥  expiresIn：'1d' 表示过期时间是一天
          token: jwt.sign(res, JWT_SECRET, { expiresIn: '1d' }),
        },
      }
    } catch (err) {
      console.error('用户登录失败', err)
    }
  }
  //! 修改密码
  async changePassword(ctx) {
    // 1.获取数据
    const id = ctx.state.user.id
    const password = ctx.request.body.password
    // 2.操作数据库
    try {
      await updateById({ id, password })
      ctx.body = {
        code: 0,
        message: '修改密码成功',
        result: '',
      }
    } catch (err) {
      console.error('修改密码失败', err)
      return ctx.app.emit('error', updatePassowrdError, ctx)
    }
  }
  //! 获取用户信息
  async getuserData(ctx) {
    const res = await getuserDatas(ctx.request.query.user_name)
    ctx.body = {
      code: 0,
      message: '获取成功',
      result: res,
    }
  }
}

module.exports = new UserController()
