const { join } = require('path')

const Koa = require('koa2')
const KoaBody = require('koa-body')
const cors = require('koa2-cors')
const static = require('koa-static')
const parameter = require('koa-parameter')

const router = require('../router/index')
const errHandler = require('./errHandler')

const app = new Koa()

app.use(
  KoaBody({
    //* 允许上传文件
    multipart: true,
    formidable: {
      uploadDir: join(__dirname, '../assets/uploads'),
      keepExtensions: true,
    },
  })
)
app.use(static(join(__dirname, '../assets')))
app.use(cors())
app.use(parameter(app))
app.use(router.routes(), router.allowedMethods())

// 统一的错误处理
app.on('error', errHandler)

module.exports = app
