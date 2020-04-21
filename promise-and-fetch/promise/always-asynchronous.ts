const alwaysAsynchronous = new Promise((resolve) => {
  resolve('PROMISE VALUE');
}).then(console.log);

console.log('MAIN PROGRAM');
