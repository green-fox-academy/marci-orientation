const button = document.querySelector("button");
button.addEventListener("click", () => {
    let list = document.querySelectorAll("li");
    let result = document.getElementsByClassName("result")[0];
    result.innerHTML = String(list.length);
});
//# sourceMappingURL=counter.js.map