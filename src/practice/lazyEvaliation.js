const rand = function* () {
  while(true) {
    yield Math.random();
  }
}
const randIter = rand();
randIter.next();