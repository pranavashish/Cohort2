// function findsum(n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += i;
//   }
//   return ans;
// }

// function findSum100() {
//   console.log(findsum(100));
// }
// // busy waiting

// function syncSleep() {
//   let a = 1;
//   for (let i = 0; i < 100000000; i++) {
//     a++;
//   }
// }
// syncSleep();
// setTimeout(findSum100, 1000);
// console.log("Yo Yo");

// const fs = require("fs");
// // fs = file system

// fs.readFile("a.txt", "utf-8", function (err, data) {
//   console.log(data);
// });

// console.log("hi there");

// let a = 0;
// for (let i = 0; i < 10000000; i++) {
//   a++  ;
// }
// console.log(a);

// console.log("hi there 2");

const fs = require("fs");

// my own asynchronous function
function kiratsReadFile() {
  console.log("Inside kiratsreadfile");
  return new Promise(function (resolve) {
    console.log("Inside promise");
    fs.readFile("a.txt", "utf-8", function (err, data) {
      console.log("before promise");
      resolve(data);
    });
  });
}

// callback function to call
function onDone(data) {
  console.log(data);
}

kiratsReadFile().then(onDone);
