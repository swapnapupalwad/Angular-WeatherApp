import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daynames'
})
export class DaynamesPipe implements PipeTransform {

  transform(date:any): any {
    let day = new Date(date);
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day.getDay()];
  }

}
