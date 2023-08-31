console.log("hello world");
// 반복문을 돌면서 console을 출력하는 것보다 하나의 변수에 값을 담고 한번만 출력하는게 성능면에서 더 좋다.

// let fs = require('fs');
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
// let input2 = fs.readFileSync("input.txt").toString().split("\n");

// const rl = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// rl.on("line", function (line) {
//   //콘솔 입력 창에서 줄바꿈(enter)를 입력할 때 마다 호출
//   input.push(line);
// }).on("close", function () {
//   //콘솔 입력 창에서 Ctrl + C 혹은 Ctrl + D를 입력하면 호출(입력 종료)
//   console.log(input);
//   process.exit();
// });

// //배열 초기화
// let arr = [8, 1, 2, 3, 5, 6];
// // 길이가 5이고 모든 원소의 값이 0인 배열 초기화
// let arr2 = new Array(5).fill(0);
