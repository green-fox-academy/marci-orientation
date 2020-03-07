var originalImage = document.querySelector("img");
console.log("original image", originalImage.getAttribute("src"));
var newImage = originalImage.setAttribute(
  "src",
  "https://resize.hswstatic.com/w_907/gif/tesla-cat.jpg"
);
var originalLink = document.querySelector("a");
var newLink = originalLink.setAttribute(
  "href",
  "https://www.greenfoxacademy.com/junior-programozo-kepzeseink/szuperintenziv-kepzes?gclid=EAIaIQobChMI8MyklsSI6AIVh6MYCh25qw9zEAAYASAAEgIBOvD_BwE"
);
var button = (document.getElementsByClassName("this-one")[0].innerHTML =
  "They made me do it");
var disabledButton = (document.getElementsByClassName(
  "this-one"
)[0].disabled = true);
console.log(button);
