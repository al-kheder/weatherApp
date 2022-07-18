import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  cityName: string = 'Berlin';
  weatherData?: WeatherData;
  ngOnInit() {
    this.getWeartherData(this.cityName);
  }
  onSubmit() {
    this.getWeartherData(this.cityName);
    this.cityName = '';
  }
  private getWeartherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
