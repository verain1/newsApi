import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';


@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private service:NewsApiService) { }

  topTechnologyResult: any = [];
  ngOnInit(): void {

    this.service.topTechnology().subscribe(

      (result) => 
      {

        console.log(result);
        this.topTechnologyResult = result.articles;
      }
    )
  }

}
