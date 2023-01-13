import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'militaire'
})
export class MilitaryPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(typeof value !== 'string'){
      return value;
    }
    const time = value;

    var hours = Number(time)/100;

    var timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue = "" + hours;
    } else if (hours > 12) {
      timeValue = "" + (hours - 12);
    } else if (hours == 0) {
      timeValue = "12";
    }

    timeValue += ":00"

    timeValue += (hours >= 12) ? " pm" : " am";
    return timeValue;
  }

}