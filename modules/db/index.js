const mongoose = require('mongoose')

//1.链接服务器
mongoose.connect('mongodb://localhost:27017/bozai-yanxuan',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true,
})
//2.使用once绑定一次性事件,这样就可以知道链接是否成功
mongoose.connection.once('opne',err=>{
  if(err){
    console.log('链接数据库失败');
    return
  }
  console.log('连接数据库成功');
})