import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './model/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  // lagos as a default value
  cityName: string = 'Lagos';
  weatherData?: WeatherData;

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }

  private getWeatherData(cityName: string) {
    this.weatherService
      .getWeatherData(cityName)
      // subscribe to the method getweatherData
      .subscribe({
        next: (response: any) => {
          this.weatherData = response;
          console.log(response);
        },
      });
  }
}
