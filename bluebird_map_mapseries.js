/**
 * Created by zhangjing on 17/2/17
 * @bluebird Promise.map() Promise.mapSeries()类似async的map&mapSeries
 */

const Promise = require("bluebird");

function async_fun1(num) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve("success-" + (num + 1));
    }, 300);
  });
}
//数组不用promise化
let arr1 = [0, 1, 2];
//map和mapSeries的区别，map并行执行，mapSeries顺序执行
Promise.map(arr1, (it)=> {
  return async_fun1(it);
}).then((result)=> {     //result是个数组，接收各个Promise对象返回的结果
  console.log("result:", result);
}).catch((error)=> {
  //console.log("error":error);
});

Promise.mapSeries(arr1, (it)=> {
  return async_fun1(it);

}).then((result)=> {
  console.log("result:", result);
}).catch((error)=> {
  console.log("error:", error);
  //和async.map一样一个出错就会触发catch
});

//map和mapSeries高级用法
//可在链式调用中使用，当做Array.map或foreach使用

function async_sum(num1, num2) {
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve([num1 + 1, num2 + 2]);
    }, 300)
  });
}

async_sum(1, 2)
  .map((it)=> {
    console.log("map ", it);
  })
  .then(()=> {
    console.log(data);
  })

async_sum(1, 2)
  .mapSeries((it)=> {
    console.log("map ", it);
  })
  .then(()=> {
    console.log("result map finished");
  })














