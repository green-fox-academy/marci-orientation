const king: HTMLElement = document.getElementById("b325");
console.log("king", king);

const businessLamp: NodeListOf<Element> = document.querySelectorAll(".big");

businessLamp.forEach(element => {
  console.log(element);
});

const conceitedKing: NodeListOf<Element> = document.querySelectorAll(
  ".container > div"
);

conceitedKing.forEach(element => {
  alert(element);
});

const noBusiness: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");

noBusiness.forEach(element => {
  console.log(element);
});
