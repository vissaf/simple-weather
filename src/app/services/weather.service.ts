import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
 
  constructor(private http: HttpClient) { }

  /**
   * Method to fetch Weather details of a city from Rapid API.
   * @param cityName Name of city to fetch Weather details of.
   * @returns 
   */
  public getWeatherData(cityName: string): Observable<WeatherData> {

    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {
      headers: new HttpHeaders()
      .set(environment.headerHostName, environment.headerHostValue)
      .set(environment.headerKeyName, environment.headerKeyValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('mode', 'json')
    });

  }
}
