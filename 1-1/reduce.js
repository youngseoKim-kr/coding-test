let data = [5, 2, 8, 9, 3];

//minValue 구하기 예제
let minValue = data.reduce((a, b) => Math.min(a, b));

console.log(minValue);

let summary = data.reduce((a, b) => a + b);
console.log(summary);
