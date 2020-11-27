/** 結合律 */
const f = x => x + 1;
const g = x => x * 2;
const arr = [1, 2, 3];
console.log(arr.map(x => f(g(x))));
console.log(arr.map(g).map(f));
console.log(Array.of(1));
