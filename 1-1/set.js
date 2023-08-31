let mySet = new Set();

mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(mySet.size);
console.log(mySet.has(7));
//5원소 제거
mySet.delete(5);

//원소를 하나씩 출력
for (let item of mySet) console.log(item);
