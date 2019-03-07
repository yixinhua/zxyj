//app.js
//1:加载模块 express pool.js
const express = require("express");
const pool = require("./pool");
//2:创建服务器端对象
var app = express();
//3:监听 3000
app.listen(3000);
//4:指定静态目录  public 
app.use(express.static("public"));
//5:加载跨域访问模块
const cors = require("cors");
//6:配置跨域访问模块 那个域名跨域访问允许
//  脚手架8080允许
//origin      允许跨域访问域名列表
//credentials 跨域访问保存session id
app.use(cors({
  origin:["http://127.0.0.1:8080",
  "http://localhost:8080"],
  credentials:true
}));
//6.1下载express-session 并且配置
const session=require("express-session");
app.use(session({
  secret:"128位随机字符",//安全字符串
  resave:false,//每次请求是否都更新数据
  saveUninitialized:true,//初始化时保存数据
  cookie:{
    maxAge:1000*60*60*8
  }
}));
//7加载第三方模块body-parser
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}))
//功能1轮播
app.get("/imagelist",(req,res)=>{
  var list=[
    {id:1,img_url:"http://127.0.0.1:3000/img/banner1.jpg"},
    {id:2,img_url:"http://127.0.0.1:3000/img/banner2.jpg"}
  ];
  res.send(list)
})
//功能二 广告区
app.get("/pro",(req,res)=>{
  var sql="select * from zx_pro1"
  pool.query(sql,(err,result)=>{
    if(err) throw err
    res.send({code:1,data:result})
  })
})
//商品列表
app.get("/productlist",(req,res)=>{
  var id=req.query.id
  var sql="select * from zx_prolist";
  pool.query(sql,(err,result)=>{
    if(err) throw err
    res.send({code:1,data:result})
  })
})
//功能四：登录
app.get("/Login",(req,res)=>{
  var phone=req.query.phone
  var upwd=req.query.upwd
  var sql="select uid from zx_user where phone=? and upwd=?"
  pool.query(sql,[phone,upwd],(err,result)=>{
    if (err) throw err;
    if(result.length>0){
      var id=result[0].uid
      req.session.uid=id;
      res.send({code:1,msg:"登录成功"})
    }else{
      res.send({code:-1,msg:"用户名或密码错误"})
    }
  })
})
