import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http: HttpClient) { }

  topHeadlinesApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=463990f4ce614944895c5f2a98e11260";
  topHeadlines():Observable<any>{
    return this.http.get(this.topHeadlinesApiUrl);
  }

  topTechnologyApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=463990f4ce614944895c5f2a98e11260";
  topTechnology():Observable<any>{
    return this.http.get(this.topTechnologyApiUrl);
  }

  weatherApiUrl = "http://api.weatherstack.com/current?access_key=9b1119a5eec3bff57394874a08546e8c&query=Jalandhar";
  weather():Observable<any>{
    return this.http.get(this.weatherApiUrl);
  }
}
