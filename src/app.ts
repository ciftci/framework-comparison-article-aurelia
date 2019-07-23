import { HttpClient } from "aurelia-fetch-client";

let httpClient = new HttpClient();

export class App {
  public message: string = "Hello World!";
  public searchText: string = "engineering";
  public items: IItem[] = [];
  public loading: boolean = false;
  attached() {
    this.getData(this.searchText);
  }
  getData(queryString) {
    this.loading = true;
    httpClient
      .fetch(
        "https://codingthat-quick-json-back-end-2.glitch.me/posts?q=" +
          queryString
      )
      .then(response => response.json())
      .then(data => {
        this.items = data;
        this.loading = false;
      })
      .catch(error => {
        this.loading = false;
      });
  }
}

export interface IItem {
  title: string;
  url: string;
}
