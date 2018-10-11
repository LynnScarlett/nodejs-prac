process.nextTick(function () {
  console.log("nextTick延迟执行1")
})

process.nextTick(function () {
  console.log("nextTick延迟执行2")
})

// 加入两个setImmediate()的回调函数
setImmediate(function () {
  console.log("setImmediate延迟执行1")
  // 进入下次循环
  Promise.resolve().then(function () {
    console.log('promise1')
  })
  process.nextTick(function () {
    console.log("nextTick1")
  })
  process.nextTick(function () {
    console.log("nextTick2")
  })
}, 0)

setImmediate(function () {
  console.log("setImmediate延迟执行2")
}, 0)

console.log("正常执行")