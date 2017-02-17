/**
 * Created by zhangjing on 17/2/17
 * @bluebird Promise.all
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

//无异常情况
Promise.all([async_func1(),async_func2("zj")])
  //async_func1及async_func2成功执行，"async_func2 succeed" "async_func2 failed" 传到data，data是一个数组，
  .then((data)=>{
    console.log("data[0]: ",data[0]);
    console.log("data[1]: ",data[1]);
  })
  .catch((error)=>{
    console.log("error: ",error);
  });
// .all方法类似async的series，只不过.all是并行执行的不保证顺序，返回的数据和async.series一样是个数组
//使用spread格式化输出，spread会把返回的数组对应到参数，如arr=[1,2],则spread((value1,value2)=>{})
//会将arr[0]自动付给value1,将arr[1]自动赋给value2
Promise.all([async_func1(),async_func2("zj")])
  .spread((value1,value2)=>{
    console.log("value1: ",value1);
    console.log("value2: ",value2);
  })
  .catch((error)=>{
    console.log("error: ",error);
  });

//有异常情况
Promise.all([async_func1(),async_func2("Kobe")])
  .spread((value1,value2)=>{
    console.log("value1: ",value1);
    console.log("value2: ",value2);
  })
  .catch((error)=>{
    console.log("error: ",error);
  });






















