"use strict";

const mapWith = (array: any, callback: any) => {
  let output: any[] = [];

  array.forEach((e: any) => {
    output.push(callback(e));
  });

  return output;
};

const addOne = (number: number) => {
  return number + 1;
};

console.log(mapWith([1, 2, 3], addOne));

const removeSecondLetter = (word: string) => {
  let temp: any[] = [];

  let letters: string[] = word.split("");

  for (let i = 0; i < letters.length; i++) {
    if (i % 2 === 0) {
      temp.push(letters[i]);
    }
  }
  return temp.join("");
};

const words: string[] = ["map", "reduce", "filter"];

console.log(mapWith(words, removeSecondLetter));
