import { Component, OnInit } from '@angular/core';
import { WttrObject } from '../../../../common/weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-prochains-jours',
  templateUrl: './prochains-jours.component.html',
  styleUrls: ['./prochains-jours.component.css']
})
export class ProchainsJoursComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  public meteos: WttrObject[] = [];

  ngOnInit(): void {
    this._weatherService.data.subscribe({
      next:meteos => this.meteos = meteos,
      error:err => console.error(err)
    })
    
  }

}
