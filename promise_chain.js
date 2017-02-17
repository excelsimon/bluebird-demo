/**
 * Created by zhangjing on 17/2/17
 */

var Promise = require("bluebird");

function async_func1(name) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      switch(name){
      case "Tom":
        resolve({name: name, age: 27});
      case "Jay":
        resolve({name: name, age: 30});
      default:
        reject("无此用户信息");
      }
    }, 200);
  });
}

function async_func2(userobj) {
  return new Promise((resolve,reject)=>{
    setTimeout(()=> {
      if(userobj.age === 27){
        userobj.role = "student";
        resolve(userobj);
      }else{
        userobj.role = "teacher";
        resolve(userobj);
      }
    },300);
  });
}

//无异常调用
async_func1("Tom")
  .then((userobj)=>{
    return async_func2(userobj);
  })
  .then((userobj)=>{
    console.log("userobj: ",userobj);
  })
  .catch((error)=>{
    console.log("error: ",error);
  })

//有异常调用

async_func1("zj")
  .then((userobj)=>{
    return async_func2(userobj);
  })
  .then((userobj)=>{
    console.log("userobj: ",userobj);
  })
  .catch((error)=>{
    console.log("error: ",error);
  })


















