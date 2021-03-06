const partial = (f, ...args) => (...moreArgs) => f(...args, ...moreArgs);
const add3 = (a, b, c) => a + b + c;
const fivePlus = partial(add3, 2, 3);
const result = fivePlus(4);

console.log('result:', result);
