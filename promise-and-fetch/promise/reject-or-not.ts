const rejectOrNot = new Promise((resolve, reject) => {
  resolve('I FIRED');
  reject(new Error('I DID NOT FIRE'));
}).then(console.log, (error) => console.log(error.message));
