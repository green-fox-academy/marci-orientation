"use strict";

class SimpleTimeout {
  public set = setTimeout((): void => {
    console.log("apple");
  }, 3000);
}

const apple: SimpleTimeout = new SimpleTimeout();
const appleTimeout: NodeJS.Timeout = apple.set;
