/**
 * Created by  zhangjing on 17/1/11.
 */

const Promise = require('bluebird');
//异步操作没有错误
function timeout() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            let value = {name: 'zj'};
            return resolve(value);
         },200);
    });
}

timeout()
    .then((value) => {
        console.log("异步操作没有错误", value);
    });
//var resultWithoutError = timeout();

//有错误的情况
function timeoutWithError () {
    return new Promise((resolve,reject) => {
        //let error = new Error('出错了');
        return setTimeout(() => {
            let error = new Error('出错了');
            return reject(error);
        });
    });
}

timeoutWithError()
    .then((value) => {
        //有异常，不会执行then
        console.log("异步操作没有错误", value);
    })
    .catch((err) => {
        console.log("异步操作出现错误", err);
    });
//var resultWithError = timeoutWithError();
//快速生成一个Promise
//返回的成功的promise
var resolvedPromise = Promise.resolve('成功的promise');
//返回的错误的promise
var rejectedPromise = Promise.reject(new Error('失败的promise'));

//下面在调用.then方法就可以执行此promise了