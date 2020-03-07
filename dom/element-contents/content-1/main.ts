class Filler {
  private list: string[];

  constructor(list: string[] = ["apple", "balloon", "cat", "animals"]) {
    this.list = list;
  }

  public addContent(): string[] {
    for (let i = 0; i < this.list.length - 1; i++) {
      document
        .querySelector("." + this.list[i])
        .append(
          " " +
            document.querySelector("." + this.list[this.list.length - 1])
              .textContent
        );
    }
    return this.list;
  }

  public keepStrong(): string[] {
    for (let index = 0; index < this.list.length; index++) {
      for (let i = 0; i < this.list.length - 1; i++) {
        document.querySelector("." + this.list[i]).innerHTML =
          document.querySelector("." + this.list[i]).innerHTML +
          " " +
          document.querySelector("." + this.list[this.list.length - 1])
            .innerHTML;
      }
      return this.list;
    }
  }
}

const asd = new Filler();
asd.addContent();
