Array.prototype.chain = function (f) {
  return this.reduce((acc, t) => acc.concat(f(t)), []);
}
const split = x => x.split(',');
const a = Array.of('cat,dog', 'fish,bird').chain(split);
console.log(a);
