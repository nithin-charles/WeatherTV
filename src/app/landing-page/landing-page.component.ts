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
  public defaultText ?: string = 'Enter the City Name';
  public isLoading : boolean = false;
  constructor(private _weatherService : WeatherService){}

  public search(city : string | undefined): void{
    this._weatherService.fetchWeathers(city).subscribe((data) => {
      this.isLoading = true;
      console.log(data.currentConditions['temp']);
      this.temperature = data.currentConditions['temp'];
    });
    this.isSearchComplete = true;
    this.isLoading = false;
  }
  public showSearchBar(): void{
    this.isSearchComplete = false;
    this.temperature = undefined;
    this.cityName = undefined;
  }

  public getTime(): string{
    var currentDate = new Date();
    var hours = currentDate.getHours();
    if(hours >=24 && hours <=12){
      return "Good Morning!";
    }
    else if(hours >12 && hours <=16){
      return "Good Afternoon!";
    }
    else if(hours >16 && hours <=20){
      return "Good Evening!";
    }
    else{
      return "Good Night!";
    }
  }
  public showDefaultText() : string{
    return 'Enter the City Name';
  }

}
