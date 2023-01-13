import { Component, OnInit } from '@angular/core';
import { WttrObject } from '../../../../common/weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-prochaines-heures',
  templateUrl: './prochaines-heures.component.html',
  styleUrls: ['./prochaines-heures.component.css']
})
export class ProchainesHeuresComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  public meteos: WttrObject[] = [];

  ngOnInit(): void {
    this._weatherService.data.subscribe({
      next:meteos => this.meteos = meteos,
      error:err => console.error(err)
    })
    
  }

}
