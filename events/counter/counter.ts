const button: HTMLButtonElement = document.querySelector("button");
button.addEventListener("click", () => {
  let list: NodeListOf<HTMLLIElement> = document.querySelectorAll("li");
  let result: Element = document.getElementsByClassName("result")[0];

  result.innerHTML = String(list.length);
});
