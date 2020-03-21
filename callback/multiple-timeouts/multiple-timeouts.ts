"use strict";

class MultipleTimeouts {
  public printApple = setTimeout((): void => {
    console.log(`apple`);
  });

  public printPear = setTimeout((): void => {
    console.log(`pear: 1 second`);
  }, 1000);

  public printMelon = setTimeout((): void => {
    console.log(`melon : 3 seconds`);
  }, 3000);

  public printGrapes = setTimeout((): void => {
    console.log(`grapes : 5 seconds`);
  }, 5000);
}

const fruits: MultipleTimeouts = new MultipleTimeouts();
