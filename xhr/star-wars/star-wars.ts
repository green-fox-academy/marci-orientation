"use strict";

class StarWars {
  public URL: string;
  private myRequest: XMLHttpRequest;
  public filmContainer: HTMLElement;
  private btn: HTMLElement;
  private counter: number;

  constructor(API_URL: string) {
    this.URL = API_URL;
    this.myRequest = new XMLHttpRequest();
    this.filmContainer = document.getElementById("film-list");
    this.btn = document.getElementById("button");
    this.counter = 1;
  }

  public load(): void {
    this.myRequest.onload = () => {
      if (this.myRequest.status === 200) {
        const myResponse: any = JSON.parse(this.myRequest.responseText);
console.log("WHOLE OBJECT", myResponse);
        console.log(myResponse.title.results);

        for (let i = 0; i < myResponse.title.length; i++) {
          this.btn.onclick = () => {
            let title: string = myResponse.results[i].title;
            const releaseDate: string = myResponse.results[i].release_date;
            const titleAndReleaseDate: string = `${title} ${releaseDate} `;

            const filmList = document.createElement("li");
            filmList.innerText = titleAndReleaseDate;
            this.filmContainer.appendChild(filmList);
          };
        }
      }
    };
  }

  public open(): void {
    this.myRequest.open("GET", `${this.URL}${this.counter}`);
  }

  public send(): void {
    this.myRequest.send();
    this.counter++;
  }
}

const film = new StarWars("https://swapi.co/api/films/");
film.load();
film.open();
film.send();

// console.log("KEYS", Object.keys(myResponse));
// console.log("VALUES", Object["values"](myResponse));

// to be continued
