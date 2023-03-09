import { Component ,Input, SimpleChanges} from '@angular/core';
import {WeatherDataService} from'../weather-data.service'
import { __values } from 'tslib';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent {

  vars:any;
  varss:any;
  today:any;
  currentHours:any;
  date:any;
   condition:any[]=[];
   icon:string='icon'
   @Input() childInput: any;
   divw1Visible: boolean = true;
   divw2Visible: boolean = false;
   constructor( private waetherdata:WeatherDataService){
    this.childInput = '';

    // this.waetherdata.getwetherdata()
    // .subscribe({next:(response)=>{
    //       this.vars=response;
    //      console.log(this.vars);
    //       this.today = this.vars.days;
    //      console.log(this.today) 
    //       this.currentHours=this.today;
    //       this.varss=this.currentHours;
        //  for (var i=0; i < this.varss.length ; ++i)
        //     this.condition.push(this.varss[i][this.icon]);
        //  console.log(this.condition)

  //  }})
  }
  
  
  
  toggleVisibilitycc(){
    console.log('hello');
    this.divw1Visible = true;
    this.divw2Visible = false;  }
  toggleVisibilityff(){
    this.divw1Visible = false;
    this.divw2Visible = true;
  }
  ngOnChanges(changes: SimpleChanges) {
    // console.log( changes['childInput'].currentValue);
    this.printdata(changes['childInput'].currentValue)

  }
   ngOnInit():void{
    this.printdata(this.childInput);
     this.getDayName(this.date)
     this.getIcon(this.condition)

   }
  
   printdata(city: any){
    this.waetherdata.getSomeData(this.childInput)
    .subscribe({next:(response)=>{
          this.vars=response;
         console.log(this.vars);
          this.today = this.vars.days;
         console.log(this.today) 
          this.currentHours=this.today;
          this.varss=this.currentHours;}})
   }
 
   
  
    
    getIcon(condition: any) {
     if (condition ==="partly-cloudy-day") {
       return "assets/images/cloud-sun.gif";
     } else if (condition === "partly-cloudy-night") {
       return "assets/images/partly-coudy-night.png";
     } else if (condition === "rain") {
       return "assets/images/cloud-sun.gif";
     } else if (condition ==="clear-day") {
       return "assets/images/sunny.gif";
     }  else if (condition ==="clear-night") {
       return "assets/images/clear-night.gif";
     } else{
       return "assets/images/cloudy.gif";
   }
    }
    getDayName(date:any) {
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
   
 

 
