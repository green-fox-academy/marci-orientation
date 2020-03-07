var king = document.getElementById("b325");
console.log("king", king);

var businessLamp = document.querySelectorAll(".big");

businessLamp.forEach(function(element) {
  console.log(element);
});
var conceitedKing = document.querySelectorAll(".container > div");

conceitedKing.forEach(function(element) {
  alert(element);
});
var noBusiness = document.querySelectorAll("div");

noBusiness.forEach(function(element) {
  console.log(element);
});
