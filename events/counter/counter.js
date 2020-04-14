var button = document.querySelector("button");
button.addEventListener("click", function () {
    var list = document.querySelectorAll("li");
    var result = document.getElementsByClassName("result")[0];
    result.innerHTML = String(list.length);
});
//# sourceMappingURL=counter.js.map