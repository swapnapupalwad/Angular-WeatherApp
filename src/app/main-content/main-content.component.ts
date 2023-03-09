import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { __values } from 'tslib';
import { WeatherDataService } from '../weather-data.service'
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  vars: any;
  varss: any;
  today: any;
  currentHours: any;
  datetime: string = 'datetime';
  isHidden = true;
  visible=true;
  condition: any[] = [];
  //icon:string='icon'
  Inputvalue: any = '';
  @Input() childInput: any;
  products: any;
  constructor(private waetherdata: WeatherDataService) {
    this.childInput = '';


  }
  div1Visible: boolean = true;
  div2Visible: boolean = false;
  toggleVisibility() {
    this.div1Visible = true;
    this.div2Visible = false;  }
  toggleVisibilityf() {
    this.div1Visible = false;
    this.div2Visible = true;
  }
  onButtonClick() {

    console.log(this.childInput)

  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log( changes['childInput'].currentValue);
    this.printdata(changes['childInput'].currentValue)

  }

  ngOnInit(): void {
    this.getIcon(this.condition);
    this.onButtonClick();
    //  console.log(this.products)
    console.log(this.childInput)
  }

  getv() {
    this.waetherdata.getwetherdata()
  }
  printdata(city: any) {
    this.waetherdata.getSomeData(this.childInput)
      .subscribe({
        next: (response) => {
          this.vars = response;
          //console.log(this.vars);
          this.today = this.vars.days;
          // console.log(this.today[0]) 
          this.currentHours = this.today[0];
          this.varss = this.currentHours.hours;
          console.log(this.childInput)

          // for (var i=0; i < this.varss.length ; ++i)
          //     //this.condition.push(this.varss[i][this.icon])
          //     this.time.push(this.varss[i][this.datetime])
        }
      })
  }






  getIcon(condition: any) {
    if (condition === "partly-cloudy-day") {
      return "assets/images/cloud-sun.gif";
    } else if (condition === "partly-cloudy-night") {
      return "assets/images/partly-coudy-night.png";
    } else if (condition === "rain") {
      return "assets/images/cloud-sun.gif";
    } else if (condition === "clear-day") {
      return "assets/images/sunny.gif";
    } else if (condition === "clear-night") {
      return "assets/images/clear-night.gif";
    } else {
      return "assets/images/cloudy.gif";
    }
  }
}



