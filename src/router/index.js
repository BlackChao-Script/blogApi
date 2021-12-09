const Router = require('koa-router')
const router = new Router()
const user = require('./user')
const upload = require('./upload')
const md = require('./md')
const sort = require('./sort')
const home = require('./home')
const aboutMe = require('./aboutMe')

router.use('/user', user.routes(), user.allowedMethods())
router.use('/upload', upload.routes(), upload.allowedMethods())
router.use('/md', md.routes(), md.allowedMethods())
router.use('/sort', sort.routes(), sort.allowedMethods())
router.use('/home', home.routes(), home.allowedMethods())
router.use('/aboutMe', aboutMe.routes(), aboutMe.allowedMethods())

module.exports = router
