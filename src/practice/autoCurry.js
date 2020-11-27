const R = require('ramda');
const add = (x, y) => x + y;
const curriedAdd = R.curry(add);

console.log('1', curriedAdd(1, 2));
console.log('2', curriedAdd(1)(2));
