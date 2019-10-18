import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'is-there-sds-next-week';
  ms = 1000 * 60 * 60 * 24;
  t = new Date("10/20/2019")
  // t = Math.ceil(Math.abs(this.classes[0] - this.today)/(1000 * 60 * 60 * 24));

  validate()
  {
    let rawToday = new Date();
    rawToday.setSeconds(0);
    rawToday.setMinutes(0);
    rawToday.setHours(0);
    let today = Math.ceil(rawToday/this.ms);
    let classes = [
    Math.ceil(new Date("11/04/2019")/this.ms),
    Math.ceil(new Date("12/09/2019")/this.ms),
    Math.ceil(new Date("01/13/2020")/this.ms),
    Math.ceil(new Date("01/27/2020")/this.ms)
  ];

    for (let index = 0; index < classes.length; index++) {
      const sdsclass = classes[index];
      if(sdsclass > today)
      {
        return sdsclass - today;
      }
    }
  }

  
}
