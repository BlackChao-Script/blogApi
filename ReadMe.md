# 一、项目初始化

## 1. 生成package.json文件

```
npm init -y
```

- 用来存放各种配置与插件

## 2. 生成本地git仓库

```
git init
```

- .git文件是隐藏文件夹

## 3.创建.gitgonore文件

```
node_modules
```

- 用来排除上传git仓库时的文件

## 4.创建ReadMe.md文件

- 用来记录项目过程

# 二、安装Koa2框架

## 1.安装

```
npm i koa2
```

## 2.创建入口文件

在项目目录创建 src/main.js 文件:

```js
const Koa = require('koa2')
const app = new Koa()
const port = 8080

app.use(asycn,(ctx)=>{
    ctx.body = 'Hello Koa2'
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
}
```

在package.json里配置：

```json
{ 
    "scripts": {  
        "dev": "node ./src/main.js" 
    },
}
```

运行 npm run dev 启动项目，并在浏览器打开 http://localhost:8080/  即可看到项目效果

# 三、项目的基本优化

## 1.自动重启服务

安装 nodemon自动重启插件:

```
npm i nodemon -g
```

然后修改package.json里的配置：

```
{ 
    "scripts": {  
        "dev": "nodemon ./src/main.js" 
    },
}
```

# 四、添加路由

当需要匹配不同路由时，可以安装:

```
npm i koa-router
```

将main.js修改:

```js
const Koa = require('koa2')
const Router = require('koa-router')
const app = new Koa()
const router = new Router()
const port = 8080

router.get('/',async (ctx)=>{
    ctx.body = '首页'
})
router.get('/list',async (ctx)=>{
    ctx.body = '列表页'
})

app.use(router.routes(),router.allowedMethods())
app.listen(port,()=>{
    console.log(`erver is running at http://localhost:${port}`)
})
```

此时，到浏览器刷新并在地址栏最后添加 `/list` 即可得到首页和列表页。

- 调用router.routes()来组装匹配好的路由，返回一个合并号的中间件
- 调用router.allowedMethods()获得一个中间件，当发送了不符合的请求时，会返回405 Method Not Allowed` 或 `501 Not Implemented`

# 五、目录结构优化

## 1.路由拆分

**创建 router 文件夹**

并在其中创建：`index.js`(路由总入口文件)、`home.js`(首页总路由文件)：

```js
// main.js
const router = require('./router/index')
app.use(router.routes(),router.allowedMethods())

// index.js
const Router = require('koa-router')
const router = new Router()
const home = require('./home')
const list = require('./list')

router.use('/home', home.routes(), home.allowedMethods())

module.exports = router

// home.js
const Router = require('koa-router');
const home = new Router();

// 这里的 '/' 就是指向 index.js 中的 /home
home.get('/', async (ctx) => {
        ctx.body = "首页";
    })

module.exports = home;
```

## 2.将http服务和app业务拆分

创建**src/app/index.js**

```js
const Koa = require('koa2')
const app = new Koa()
const router = require('../router/index')

app.use(router.routes(), router.allowedMethods())

module.exports = app
```

在main.js中：

```js
const app = require('./app/index')
const port = 8080

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
```

## 3.控制器拆分

控制器：处理不同业务

**创建src/controller/home.controller.js文件**：

```js
class HomeController {
  async homes(ctx, next) {
    ctx.body = '首页'
  }
}

module.exports = new HomeController()
```

在home.js中：

```js
const Router = require('koa-router')
const home = new Router()
const { homes } = require('../controller/home.controller')

home.get('/', homes)

module.exports = home
```

# 六、解析 body

## 1.安装 koa-body

```
npm i koa-body
```

## 2.注册中间件

改写**app/index.js**

```js
const Koa = require('koa2')
const router = require('../router/index')
const KoaBody = require('koa-body')
const app = new Koa()

app.use(KoaBody())
app.use(router.routes(), router.allowedMethods())

module.exports = app
```

## 3.解析请求数据

改写**home.controller.js**文件

```js
const { createHome } = require('../service/home.service')
class HomeController {
  async homes(ctx, next) {
    const { test } = ctx.request.body
    const res = await createHome(test)
    ctx.body = ctx.request.body
  }
}

module.exports = new HomeController()
```

## 4.拆分 service 层

创建**src/service/home.service.js**

```js
class HomeService {
  async createHome(test) {
    // todo: 写入数据库
    return '写入数据库成功'
  }
}

module.exports = new HomeService()
```

