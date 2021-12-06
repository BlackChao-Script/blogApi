//! 开启服务端口号
const SERVICE_PORT = 8080
//! 数据库数据
const MYSQL_HOST = 'localhost'
const MYSQL_PORT = '3306'
const MYSQL_USER = 'root'
const MYSQL_PWD = '123456'
const MYSQL_DB = 'blog'
//! toktn令牌
const JWT_SECRET = 'blg'

module.exports = {
  SERVICE_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PWD,
  MYSQL_DB,
  JWT_SECRET,
}
