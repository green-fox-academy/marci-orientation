const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error('REJECTED!')), 300);
}).then(null, (error) => console.log(error.message));
