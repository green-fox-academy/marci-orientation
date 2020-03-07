const originalImage = document.querySelector("img");

console.log("original image", originalImage.getAttribute("src"));

const newImage = originalImage.setAttribute(
  "src",
  "https://resize.hswstatic.com/w_907/gif/tesla-cat.jpg"
);

const originalLink = document.querySelector("a");

const newLink = originalLink.setAttribute(
  "href",
  "https://www.greenfoxacademy.com/junior-programozo-kepzeseink/szuperintenziv-kepzes?gclid=EAIaIQobChMI8MyklsSI6AIVh6MYCh25qw9zEAAYASAAEgIBOvD_BwE"
);

const button = (document.getElementsByClassName("this-one")[0].innerHTML =
  "They made me do it");

const disabledButton = (document.getElementsByClassName(
  "this-one"
)[0].disabled = true);

console.log(button);

export {};
