import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  getWeather(): Observable<Object> {
    return this.httpClient.get('http://api.openweathermap.org/data/2.5/weather?q=Bratislava&APPID=d92bda64fdb626e63178f077c9ac53ad&units=metric').pipe();
  }


}

