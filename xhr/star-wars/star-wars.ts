"use strict";

class StarWars {
  public URL: string;
  private myRequest: XMLHttpRequest;
  public filmContainer: HTMLElement;

  constructor(API_URL: string) {
    this.URL = API_URL;
    this.myRequest = new XMLHttpRequest();
    this.filmContainer = document.getElementById("film-list");
  }

  public load(): void {
    this.myRequest.onload = () => {
      if (this.myRequest.status === 200) {
        const myResponse: any = JSON.parse(this.myRequest.responseText);
        console.log("WHOLE OBJECT", myResponse);
        console.log("VALUES", Object.values(myResponse));
        console.log("KEYS", Object.keys(myResponse));

        // to be continued

        const temp = document.createElement("film");
        temp.innerText = myResponse.title;
        this.filmContainer.appendChild(temp);
      }
    };
  }

  public open(): void {
    this.myRequest.open("GET", `${this.URL}`);
  }

  public send(): void {
    this.myRequest.send();
  }
}

const film = new StarWars("https://swapi.co/api/films/1");
film.load();
film.open();
film.send();
