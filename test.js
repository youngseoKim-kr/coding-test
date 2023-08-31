let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
let answer = 0;

if (a === b && b === c) {
  answer = 10000 + a * 1000;
} else if (a === b) {
  answer = 1000 + a * 100;
} else if (a === c) {
  answer = 1000 + a * 100;
} else if (b === c) {
  answer = 1000 + b * 100;
} else {
  answer = Math.max(a, b, c) * 100;
}

console.log(answer);
