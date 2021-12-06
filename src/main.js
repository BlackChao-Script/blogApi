const app = require('./app/index')
//! 开启服务端口号
const { SERVICE_PORT } = require('./constant/data')

app.listen(SERVICE_PORT, () => {
  console.log(`Server is running at http://localhost:${SERVICE_PORT}`)
})
