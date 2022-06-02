### The Server Of Node
***

```
 Server Node
```

- 用 Node 搭建的纯净前端服务器Demo
- <i class="icon-share"></i> npm run serve:node

```
 Server Koa
```

- 用 Koa 搭建的具有整套流程的前端服务器Demo
- <i class="icon-share"></i> npm run serve:koa

| 相关依赖 | 依赖说明  |
| ------- | :-------: |
| body-parser |  用于解析 post 请求的 body 数据   |
| koa-body |  同上, 只是针对koa的封装, 且不支持 form-data 数据格式  |
| koa-bodyparser | 针对楼上的中间件的优化方案, 支持上传文件  |
| koa-router | 对路由 (请求地址) 处理做的封装, 最终返回的是中间件 |
| koa-static | 处理静态资源, 减少一个一个路由的判断 |
| koa-parameter | 参数校验, 验证请求传递参数是否正确, 使用：ctx.verifyParams() |
| mysql | 用于连接 mysql 数据库的插件 |
