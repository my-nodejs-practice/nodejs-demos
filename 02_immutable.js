const { Record } = require('immutable');
const SomeRecord = Record({ foo: null });
const x = new SomeRecord({ foo: 'bar' });
const y = x.set('foo', 'baz');
console.log(x);
const z = x;
// const z = x.set('foo', 'bar');
console.log(x === y); // false
console.log(x === z); // true
