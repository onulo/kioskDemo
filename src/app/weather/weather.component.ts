import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../weather.service';

@Component({
  selector: 'app-weather',
  styleUrls: ['./weather.component.css'],
  template: `
    <div class="jumbotron">
      <h1 class="display-4">Pocasie v Bratislave</h1>
      <hr class="my-4">

      <div *ngIf="response">
        <p>Aktualna teplota: {{response.main.temp}} C</p>
        <p>Vychod slnka : {{response.sys.sunrise * 1000 | date: 'HH:mm'}}</p>
        <p>Zapad slnka: {{response.sys.sunset * 1000 | date: 'HH:mm'}}</p>
        <p>Celkova oblacnost: {{response.clouds.all}} %</p>
<!--        <textarea class="form-control rounded-0" rows="50" size="150">{{response | json}}</textarea>-->
        <p *ngIf="inputVariable">{{inputVariable}}</p>
      </div>

<!--        <input [(ngModel)]="text">-->
<!--        <p>Look at me! {{text}}</p>-->
    </div>
  `
})
export class WeatherComponent implements OnInit {
  service: WeatherService;
  response: object;
  text = '';

  @Input()
  inputVariable: string;

  constructor(weatherService: WeatherService) {
    this.service = weatherService;
  }

  ngOnInit() {
    this.service.getWeather().subscribe((data: string) => {
      this.response = JSON.parse(JSON.stringify(data));
    });
  }
}
