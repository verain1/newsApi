import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../Service/news-api.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private service:NewsApiService) { }
  
  result: any = [];
  weatherData: any = [];
  ngOnInit(): void {

    this.service.weather().subscribe(
      (result) => 
      {
        console.log(result.current);
        this.weatherData = result.current;
      }
    )
  }
}
