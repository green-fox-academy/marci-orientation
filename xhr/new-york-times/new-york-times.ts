"use strict";

class NewYorkTimes {
  public API_URL: string;
  private readonly API_KEY: string;
  private myRequest: XMLHttpRequest;
  private articleContainer: HTMLElement;
  public searchKeyWord: string;

  constructor(API_URL: string, searchKeyWord: string) {
    this.API_URL = API_URL;
    this.API_KEY = "T71tjoYl3iO8uVq6GnhukOtF7unCIKND";
    this.myRequest = new XMLHttpRequest();
    this.articleContainer = document.querySelector("ul");
    this.searchKeyWord = searchKeyWord;
  }

  public load(): void {
    this.myRequest.onload = () => {
      if (this.myRequest.status === 200) {
        const myResponse: any = JSON.parse(this.myRequest.responseText);

        console.log(myResponse);

        myResponse.response.docs.forEach((e) => {
          const myArticle: HTMLElement = document.createElement("article");
          myArticle.innerText = e.headline.main;
          this.articleContainer.appendChild(myArticle);
        });
      }
    };
  }

  public open(): void {
    this.myRequest.open(
      "GET",
      `${this.API_URL}=${this.searchKeyWord}&api-key=${this.API_KEY}`
    );
  }

  public send(): void {
    this.myRequest.send();
  }
}

const apolloLanding: NewYorkTimes = new NewYorkTimes(
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?q",
  "apollo-11"
);

apolloLanding.load();
apolloLanding.open();
apolloLanding.send();
