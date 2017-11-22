// let msg = 'Hello World!!'
// console.log('msg: ', msg);

// let num = parseInt(Math.random() * 10)
// console.log('num: ', num)

function test (n) {
  console.log(n)
}

for (let i = 0; i < 20; i++) {
  const n = parseInt(Math.random() * 10)
  test(n)
}