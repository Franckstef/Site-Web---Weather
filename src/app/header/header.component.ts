import { variable } from '@angular/compiler/src/output/output_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { WttrObject } from '../../../../common/weather';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _weatherService: WeatherService) { }

  public meteos: WttrObject[] = [];
  
  title: string = 'Meteo-Kiki';
  
  public recherche: string = "" ;

 
  ngOnInit(): void {
    this._weatherService.getWeathers().subscribe({
      next:meteos => this.meteos = meteos,
      error:err => console.error(err)
    })

}

envoyer() {
  console.log(this.recherche);
  this._weatherService.getWeathers(this.recherche).subscribe({
    error:err => console.error(err)
  })

  }
}
