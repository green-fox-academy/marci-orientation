// const list = ["apple", "banana", "cat", "dog"];
// const item = document.querySelectorAll("li");
// for (let i = 0; i < item.length; i++) {
//   item[i].innerHTML = list[i];
// }
var ItemList = /** @class */ (function() {
  function ItemList(list, item) {
    if (list === void 0) {
      list = ["apple", "banana", "cat", "dog"];
    }
    if (item === void 0) {
      item = document.querySelectorAll("li");
    }
    this.list = list;
    this.item = item;
  }
  ItemList.prototype.replace = function() {
    for (var i = 0; i < this.item.length; i++) {
      this.item[i].innerHTML = this.list[i];
    }
    return this.list;
  };
  return ItemList;
})();
var asd = new ItemList();
asd.replace();
