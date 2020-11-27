const sum = (a, b) => a + b;
const curriedSum = a => b => a + b;
const add2 = curriedSum(2);

console.log('result:', curriedSum(3)(4));
console.log('result:', add2(10));

