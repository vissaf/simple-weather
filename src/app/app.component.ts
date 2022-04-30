import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}

  public weatherData?: WeatherData;
  
  ngOnInit(): void {
    this.weatherService.getWeatherData('Oakland').subscribe({
      next: (weatherResp) => {
        console.log(weatherResp);
      },
    });
  }
}
