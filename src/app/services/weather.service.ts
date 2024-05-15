import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { WeatherData } from '../model/weather.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<WeatherData> {
    const url = `${environment.baseUrl}?q=${cityName}&units=metric&appid=${environment.apiKey}`;
    return this.http.get<WeatherData>(url).pipe(
      catchError(error => {
        let errorMessage = 'An error occurred while fetching weather data.';
        if (error.error && error.error.message) {
          errorMessage = error.error.message;
        }
        return throwError(errorMessage);
      })
    );
  }

}
