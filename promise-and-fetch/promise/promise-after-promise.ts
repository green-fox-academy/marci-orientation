first()
  .then((response) => {
    return second(response);
  })
  .then((response) => {
    onFulfilled(response);
  });

const onFulfilled = (response) => {
  console.log(response);
};
