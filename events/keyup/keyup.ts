window.addEventListener("keyup", () => {
  let result: HTMLHeadingElement = document.querySelector("h1");
  const keyCode: any = event.keyCode;

  result.innerHTML = `Last pressed key code is ${keyCode}.`;
});
