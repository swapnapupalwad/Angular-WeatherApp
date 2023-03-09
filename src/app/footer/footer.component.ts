import { WeatherDataService } from '../weather-data.service'
import { Component, ElementRef, AfterViewInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { MainContentComponent } from '../main-content/main-content.component';
import { WeekComponent} from '../week/week.component';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  defaultValue = 'cleveland';
  mapUrl: SafeResourceUrl;
  lats:number = 0; // Replace with your latitude value
  lngs :number=0;
  @ViewChild(MainContentComponent) mainContentComponent!: MainContentComponent;

  @ViewChild(WeekComponent) weekComponent!: WeekComponent;
  div1Visible: boolean = false;
  div2Visible: boolean = false;
  di1Visible: boolean = true;
  di2Visible: boolean = false;
  vars: any;
  today: any;
  currentHours: any;
  varss: any;

  public city: any;
  inputValue: string = 'cleveland';
  childInputValue: any = '';
  public cityName: string = '';

  weatherDatafrom: any;
  sendValue: any;
  onClick() {
    console.log('onClick() called');
    if (this.weekComponent) {
      this.weekComponent.toggleVisibilitycc();
      this.di1Visible = true;
      this.di2Visible = false;
      
    }
    this.mainContentComponent.toggleVisibility();
    this.di1Visible = true;
    this.di2Visible = false;
    // this.mainContentComponent.toggleVisibility();
  }
  onClickf() {
    console.log('onClickf() called');
    if (this.weekComponent) {
      this.weekComponent.toggleVisibilityff();

      this.di1Visible = false;
     this.di2Visible = true;
    }
    this.mainContentComponent.toggleVisibilityf();
    this.di1Visible = false;
    this.di2Visible = true;
    // this.mainContentComponent.toggleVisibilityf();
  }

  public onInputChanged(value: string) {
    this.sendValue = value;
    console.log(this.sendValue)
    this.waetherdata.getSomeData(value)
      .subscribe(response => {
        this.vars = response;
        // this.sendValue= response;
       this.lats=this.vars.latitude;
       this.lngs=this.vars.longitude;
       var lat =this.lats; 
       // Replace with your latitude value
       var lng = this.lngs; // Replace with your longitude value
       const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.8551251082876!2d${this.vars.longitude}!3d${this.vars.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f9f3f3d17beb9%3A0x15f7b446bd10e369!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1679552751286!5m2!1sen!2sus`;
   
       // Sanitize the URL using DomSanitizer
       this.mapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(mapUrl);

        console.log(this.vars);
        this.today = this.vars;
        this.currentHours = this.today.currentConditions;

      })
    //    //     /* for (var i=0; i < this.varss.length ; ++i)
    //     //this.condition.push(this.varss[i][this.icon])
    //     this.time.push(this.varss[i][this.datetime])*/
  }


  constructor(private waetherdata: WeatherDataService ,private sanitizer: DomSanitizer) {
    

       this.mapUrl='';
    
    this.sendValue = '';
   
  }

  

  onButtonClick() {

  }

  ngOnInit() {
    this.showDiv1();
    this.showDiv2();

    this.onInputChanged(this.inputValue)

  }

  showDiv1() {
    this.div1Visible = true;
    this.div2Visible = false;
  }
  showDiv2() {
    this.div1Visible = false;
    this.div2Visible = true;
  }
  printdata(value: string) {

  }





  // public getData() {
  //   this.waetherdata.getSomeData().subscribe({
  //     next: (response) => {
  //       this.vars = response;
  //       console.log(this.vars);
  //       this.today = this.vars;
  //       //  console.log(this.today) 
  //       this.currentHours = this.today.currentConditions;
  //       //this.city=this.today.resolvedAddress
  //       console.log(this.currentHours)
  //     }})

  // }
}





