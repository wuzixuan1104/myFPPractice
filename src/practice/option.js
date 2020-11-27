const Some = v => ({
  val: v,
  map (f) { 
    return Some(f(this.val));
  },
  chain (f) { 
    return f(this.val);
  }
});

const None = () => ({
  map (f) {
    return this;
  },
  chain (f) {
    return this;
  }
});

const maybeProp = (key, obj) => obj[key] === undefined ? None() : Some(obj[key]);

const getItem = cart => maybeProp('item', cart);
const getPrice = item => maybeProp('price', item);
const getNestedPrice = obj => getItem(obj).chain(getPrice);

const a = getNestedPrice({});
const b = getNestedPrice({ item: { foo: 1 }});
const c = getNestedPrice({ item: { price: 9.99 }});

console.log('a', a);
console.log('b', b);
console.log('c', c);
