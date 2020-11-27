const map = fn => list => list.map(fn);
const add = a => b => a + b;
const incrementAll = numbers => map(add(1))(numbers);

console.log(incrementAll([1, 3, 5, 7]));
