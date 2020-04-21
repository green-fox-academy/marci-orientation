const myResolve = Promise.resolve('My solution was better');
const myReject = Promise.reject('The guy who made the npm package knows better')
  .finally(() => "I can't even use annotations because it throws an error!")
  .catch((error) => console.log(error));

// const catCounter = (a: number) => {
//   return new Promise((resolve, reject) => {
//     a <= 6
//       ? resolve(`${a}) is low enough, you can add more cats!`)
//       : reject(`Too many cats (${a}), please reduce their number!`);
//   });
// };

// const catInventory = catCounter(12);

// catInventory
//   .then((cats) => console.log(cats))
//   .catch((error) => console.error(error));
