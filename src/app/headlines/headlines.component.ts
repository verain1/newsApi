import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';



@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent {

  constructor(private service:NewsApiService) { }

  topHeadlinesResult: any = [];
  onSubmit(value: any): void {
    console.log(value);
    
    this.service.topHeadlines(value.name).subscribe(

      (result) => 
      {
        console.log(value.name);
        console.log(result);
        this.topHeadlinesResult = result.articles;
      }

    )
  }

}
