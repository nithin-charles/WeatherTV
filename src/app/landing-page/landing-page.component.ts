import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {

  public cityName ?: string;
  public temperature? : string;
  public isSearchComplete : boolean = false;
  constructor(private _weatherService : WeatherService){}

  public search(city : string | undefined): void{
    this._weatherService.fetchWeathers(city).subscribe((data) => {
      console.log(data.currentConditions['temp']);
      this.temperature = data.currentConditions['temp'];
    });
    this.isSearchComplete = true;
  }
  public showSearchBar(): void{
    this.isSearchComplete = false;
    this.temperature = undefined;
    this.cityName = undefined;
  }

}
