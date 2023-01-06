import { Component, OnInit } from '@angular/core';
import { WttrObject } from '../../../../common/weather';
import { WeatherService } from '../weather.service';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  public meteos: WttrObject[] = [];

  ngOnInit(): void {
    this._weatherService.data.subscribe({
      next:meteos => this.meteos = meteos,
      error:err => console.error(err)
    })
    
  }

}
