import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  public newsReports = [];

  constructor( public http: HttpClient ) { }

  fetchNews() {
    console.log('fetching news');
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=3830a18d17bb499f94ea98e04fc7a512"
    return this.http.get(url).pipe(tap(response => {
        console.log(response);
        this.newsReports = response['articles'];
    }));
  }

}