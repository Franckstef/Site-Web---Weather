import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import {  WttrObject} from '../../../../common/weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-conditions-actuelles',
  templateUrl: './conditions-actuelles.component.html',
  styleUrls: ['./conditions-actuelles.component.css']
})
export class ConditionsActuellesComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  public meteos: WttrObject[] = [];


  ngOnInit(): void {
    this._weatherService.data.subscribe({
      next:(meteos) => this.meteos = meteos,
      error:(err) => console.error(err)
    })

  }

}
