const compose = (f, g) => a => f(g(a));
const floorAndToString = compose(v => v.toString(), Math.floor);
const result = floorAndToString(12.12);
console.log(result);
