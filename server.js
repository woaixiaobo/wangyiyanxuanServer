//引入数据库
require('./modules/db')
const usertsModel = require('./modules/collections/user');

const bodyParser = require("koa-bodyparser");
let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

app.use(bodyParser())

let index = require('./datas/index.json');
let cateModule = require('./datas/indexCateModule.json');
let cateList = require('./datas/categoryDatas.json');


// (async function(){
//   try {
//     // await studentsModel.updateMany({},{deleted:true})
//     await usertsModel.create({phone:18712919926,code:666666})
//     // console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// })()

router.get('/index', (ctx, next) => {
  ctx.body = index
});


router.get('/cateModule', (ctx, next) => {
  // 1. 获取路由参数： query对象
  // 2. 返回路由数据
  // console.log(ctx);
  ctx.body = cateModule
});


router.get('/cateList', (ctx, next) => {
  // 1. 请求参数： body
  // console.log(ctx);
  ctx.body = cateList
})

//注册接口

router.post('/login', async(ctx, next) => {
  // 1. 请求参数： body
  const {user,code} = ctx.request.body;
  // console.log(user);
  //在数据库当中查找是否存在，注意返回的是个数组
  try {
    const result = await usertsModel.find({phone:user})//返回的是对象
    if(result[0].phone){
      if(result[0].phone===user){//如果已经登录直接登录
        if(result[0].code===code){
          ctx.body = {
            code:200,
            name:user,
            message:'登录成功',
          }
        }else{
          ctx.body = {
            code:400,
            message:'密码错误',
          }
        }
      }else{
        ctx.body = {
          code:200,
          message:'失败',
        }
      }
    }
  } catch (error) {
      try {
        // await studentsModel.updateMany({},{deleted:true})
        await usertsModel.create({
          phone:user,
          code:code
        })
        // console.log(result);
        console.log(user,code);
        ctx.body = {
          code:200,
          phone:user,
          message:'注册成功并登录',
        }
      } catch (err) {
        console.log(err);
      }
  }
  // console.log(result);
})




















app
  .use(router.routes())
  .use(router.allowedMethods())



app.listen('3001', () => {
  console.log('服务器地址: http://localhost:3001');
})
