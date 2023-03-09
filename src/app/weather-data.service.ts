import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Hour} from './environment/datainterface';

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

   public url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/cleveland?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json';
  newcity!: string;
  

  constructor(private http: HttpClient) { }

  

  



  
 public getSomeData(city:string):Observable<Hour> {
  console.log(city);
  this.newcity =city;
  return this.http.get<Hour>(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`
)}
getwetherdata(){
  console.log(this.newcity);

  return this.http.get<Hour>(this.url)
}
}
