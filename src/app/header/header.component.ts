import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
 constructor (){}
 ngOnInit() {
 this. showDiv1();
  this.showDiv2();
  this. showDiv3();
  this.showDiv4();
 }
 btnOne:string="London"
 btnTwo:string="Paris"
 btnThr:string="Cleveland"
 btnFour:string="Mumbai"
 




 div1Visible:boolean= false;
 div2Visible:boolean = false;
 div3Visible :boolean= false;
 div4Visible:boolean = false;
 showDiv1() {
  this.div1Visible = true;
  this.div2Visible = false;
  this.div3Visible = false;
  this.div4Visible = false;
}

showDiv2() {
  this.div1Visible = false;
  this.div2Visible = true;
  this.div3Visible = false;
  this.div4Visible = false;
}
showDiv3() {
  this.div1Visible = false;
  this.div2Visible = false;
  this.div3Visible = true;
  this.div4Visible = false;
}
showDiv4() {this.div1Visible = false;
  this.div2Visible = false;
  this.div3Visible = false;
  this.div4Visible = true;}



}