let mongoose = require('mongoose')
//2.创建Schema对象，对集合数据进行约束
const usersSchema = new mongoose.Schema({
  phone:{
    type:String,
    required:true,
    unique:true,
  },
  code:String,
  // sex:{
  //   type:Number,
  //   default:1,
  // },
  // hobby:[String],//字符串类型的数组
  // info:mongoose.SchemaTypes.Mixed,//任意类型
  deleted:Boolean,
})
//3.创建 集合model对象
const usersModel = mongoose.model('users',usersSchema);

//对外暴露
module.exports = usersModel