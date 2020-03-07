class ItemList {
  private list: string[];
  private item: NodeListOf<HTMLLIElement>;

  constructor(
    list: string[] = ["apple", "banana", "cat", "dog"],
    item: NodeListOf<HTMLLIElement> = document.querySelectorAll("li")
  ) {
    this.list = list;
    this.item = item;
  }

  public replace(): string[] {
    for (let i = 0; i < this.item.length; i++) {
      this.item[i].innerHTML = this.list[i];
    }
    return this.list;
  }
}

const asd = new ItemList();
asd.replace();
