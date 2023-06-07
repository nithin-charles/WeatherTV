import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly baseUrl : string = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

  private readonly subUrl : string = "?unitGroup=metric&key=MQN3UWVN5NSFAFVURDDJDMPFJ&contentType=json";
  constructor(private http: HttpClient) { }

  public async fetchWeather(city: string | undefined): Promise<any> {
    let url = this.baseUrl+`${city}`+this.subUrl;
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data from API');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from API:', error);
      throw error;
    }
  }

  public fetchWeathers(city: string | undefined): Observable<any> {
    let url = this.baseUrl + `${city}` + this.subUrl;
    return this.http.get<any>(url);
  }
  
}
