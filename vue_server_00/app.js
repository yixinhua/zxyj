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
//注册
app.get("/register",(req,res)=>{
  var phone=req.query.phone
  var upwd=req.query.upwd
  var sql="select * from zx_user where phone=?"
  pool.query(sql,[phone],(err,result)=>{
    if(err) throw err
    if(result.length>0){
      res.send({code:-1,msg:"用户名已被占用"})
    }else{
      var sql="INSERT INTO zx_user VALUES(null,'11',?,?,'111','111')"
      pool.query(sql,[upwd,phone],(err,result)=>{
        if(err) throw err
        res.send({code:1,msg:"注册成功"})
      })
    }
  })
})
//商品详情页
app.get("/findproduct",(req,res)=>{
  var id=req.query.id
  var sql="select * from zx_prolist where id=?"
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err
    res.send({code:1,data:result})
  })
})
app.get("/find",(req,res)=>{
  var pno=req.query.pno
  var key=req.query.key
  var pageSize=parseInt(req.query.pageSize)
  if(!pno){
    pno=1
  }
  if(!pageSize){
    pageSize=7
  }
  var offset=(pno-1)*pageSize
  var sql="select * from zx_prolist where title like ? limit ?,?"
  pool.query(sql,["%"+key+"%",offset,pageSize],(err,result)=>{
    if(err) throw err
    res.send({code:1,data:result})
  })
})
//添加购物车
app.get("/addcart",(req,res)=>{
  if(!req.session.uid){
    res.send({code:-1,msg:"请登录"})
    return
  }
  var id=req.query.id
  var uid=req.query.uid
  var img_url=req.query.img_url
  var title=req.query.title
  var price=parseInt(req.query.price)
  var sql="select * from zx_cart where id=?"
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err
    if(result.length==0){
      var sql=`insert into zx_cart VALUES(null,"${img_url}","${title}",${price},1,${id})`
    }else{
      var sql=`update zx_cart set count=count+1 where id=${id}`
    }
    pool.query(sql,(err,result)=>{
      if(err) throw err
      if(result.affectedRows>0){
        res.send({code:1,msg:"添加购物车成功"})
      }else{
        res.send({code:-1,msg:"添加失败"})
      }
    })
  })
})
//购物车列表
app.get("/cartlist",(req,res)=>{
  if(!req.session.uid){
    res.send({code:-1,msg:"请登录"})
    return
  }
  var sql="select c.price,c.title,c.count,l.title,c.img_url from zx_cart c,zx_prolist l where c.id=l.id"
  pool.query(sql,(err,result)=>{
    if(err) throw err
    res.send({code:1,data:result})
  })
})
//退出登录
app.get("/logout",(req,res)=>{
  req.session.uid=null;
  res.send({code:1,msg:"退出成功"})
})
//功能十一：删除购物车中一件商品
app.get("/delCartItem",(req,res)=>{
  var id=req.query.id;
  var sql="delete from zx_cart where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})
//删除选中商品
app.get("/removeItem",(req,res)=>{
  var ids=req.query.ids;
  var sql="delete from zx_cart where id in("+ids+")"
  pool.query(sql,(err,result)=>{
    if(err) throw err
    if(result.affectedRows>0){
      res.send({code:1,msg:"删除成功"})
    }else{
      res.send({code:-1,msg:"删除失败"})
    }
  })
})