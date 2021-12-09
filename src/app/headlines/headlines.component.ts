import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';



@Component({
  selector: 'app-headlines',
  templateUrl: './headlines.component.html',
  styleUrls: ['./headlines.component.css']
})
export class HeadlinesComponent implements OnInit {

  constructor(private service:NewsApiService) { }

  topHeadlinesResult: any = [];
  ngOnInit(): void {

    this.service.topHeadlines().subscribe(

      (result) => 
      {

        // console.log(result);
        this.topHeadlinesResult = result.articles;
      }

    )
  }

}
