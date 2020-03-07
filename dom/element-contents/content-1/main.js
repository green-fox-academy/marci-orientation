var Filler = /** @class */ (function() {
  function Filler(list) {
    if (list === void 0) {
      list = ["apple", "balloon", "cat", "animals"];
    }
    this.list = list;
  }
  Filler.prototype.addContent = function() {
    for (var i = 0; i < this.list.length - 1; i++) {
      document
        .querySelector("." + this.list[i])
        .append(
          " " +
            document.querySelector("." + this.list[this.list.length - 1])
              .textContent
        );
    }
    return this.list;
  };
  Filler.prototype.keepStrong = function() {
    for (var index = 0; index < this.list.length; index++) {
      for (var i = 0; i < this.list.length - 1; i++) {
        document.querySelector("." + this.list[i]).innerHTML =
          document.querySelector("." + this.list[i]).innerHTML +
          " " +
          document.querySelector("." + this.list[this.list.length - 1])
            .innerHTML;
      }
      return this.list;
    }
  };
  return Filler;
})();
var asd = new Filler();
asd.keepStrong();
