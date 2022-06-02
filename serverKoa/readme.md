### Koa 搭建的服务器

- 资源请求处理 (.html、.js、静态资源)
- 接口请求处理 ( /api/ )
- 数据库连接

-----

```
文件结构说明
```

- <b>controller</b> 控制器, 处理业务逻辑
- <b>dao</b> 持久化数据的访问, 处理sql语句
- <b>middleware</b> 中间件, 做一些特殊的逻辑处理(如, 权限校验, 资源区分...)
- <b>models</b> 实体类数据结构
- <b>public</b> 前端资源
- <b>router</b> 定义api类的接口路由
- <b>app.js</b> 主入口, 服务开始的地方
- <b>config.js</b> 配置参数, 可用于全局 global 变量下配置
- <b>db.js</b> 数据库连接与数据的查询
- <b>utils.js</b> 封装的常用方法

```
未完善点
```

- 用户认证与授权方式：JWT 和 session方式; 后者为常见方式
