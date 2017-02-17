/**
 * Created by zhangjing on 17/2/17
 * @bluebird Promise.props
 */
var Promise = require("bluebird");

function async_func1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("方法一结束");
      resolve("async_func1 succeed");
    },500);
  });
}

function async_func2(name){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(name === "zj"){
        console.log("方法二结束");
        resolve("async_func2 succeed");
      }else{
        reject("async_func2 failed");
      }
    },300)
  });
}

let props1 = {
  fun1: async_func1(),
  fun2: async_func2("zj")
}
//无异常情况
//Promise.props()与Promise.all()类似，区别是Promise.props()参数是对象，Promise.all()参数是数组，同样
//Promise.props()返回值是对象，Promise.all()返回值是数组
Promise.props(props1)
  //async_func1及async_func2成功执行，"async_func2 succeed" "async_func2 failed" 传到data，data是一个数组，
  .then((data)=>{
    console.log("data['fun1']: ",data['fun1']);
    console.log("data['fun2']: ",data['fun2']);
    console.log("data:",data);
  })
  .catch((error)=>{
    console.log("error: ",error);
  });

let prop2 = {
  fun1: async_func1(),
  fun2: async_func2('Kobe')
}
//有异常情况
Promise.props(prop2)
  .then((data)=>{
    console.log("data:",data);
  })
  .catch((error)=>{
    console.log("error: ",error);
})
;






















