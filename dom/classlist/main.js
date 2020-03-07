var myElement = document.getElementsByTagName("p");
if (myElement[3].classList.contains("dolphin")) {
  myElement[0].textContent = "pear";
}
if (myElement[0].classList.contains("apple")) {
  myElement[2].textContent = "dog";
}
var redApple = myElement[0].classList.add("red");
var newBalloon = (myElement[1].style.height = "1000px");
