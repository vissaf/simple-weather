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
  public cityName?: string;

  ngOnInit(): void {
   this.getWeatherData('Oakland');
  }

  onSubmit() {
    this.cityName ? this.getWeatherData(this.cityName) : this.getWeatherData('Oakland');
    this.cityName = '';
  }

  private getWeatherData(city: string) {
    this.weatherService.getWeatherData(city).subscribe({
      next: (weatherResp) => {
        this.weatherData = weatherResp;
      },
    });
  }
}
