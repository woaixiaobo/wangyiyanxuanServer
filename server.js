let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();


let index = require('./datas/index.json');
let cateModule = require('./datas/indexCateModule.json');
let cateList = require('./datas/categoryDatas.json')
router.get('/index', (ctx, next) => {
  ctx.body = index
});


router.get('/cateModule', (ctx, next) => {
  // 1. 获取路由参数： query对象
  // 2. 返回路由数据
  ctx.body = cateModule
});


router.get('/cateList', (ctx, next) => {
  // 1. 请求参数： body
  ctx.body = cateList
})




















app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
