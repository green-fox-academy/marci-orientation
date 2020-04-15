window.addEventListener("keyup", (event) => {
  let result: HTMLHeadingElement = document.querySelector("h1");
  const keyCode: string = event.key;

  result.innerHTML = `Last pressed key code is ${keyCode}.`;
});
