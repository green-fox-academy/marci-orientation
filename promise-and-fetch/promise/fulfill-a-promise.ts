const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('FULFILLED!');
  }, 300);
}).then((resolve) => console.log(resolve));
