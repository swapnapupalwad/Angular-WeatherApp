import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeekComponent } from './week/week.component';
import { CustompipePipe } from './pipes/custompipe.pipe';
import { DaynamesPipe } from './pipes/daynames.pipe';
import { WeatherDataService } from './weather-data.service'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContentComponent,
    FooterComponent,
    NavbarComponent,
    WeekComponent,
    CustompipePipe,
    DaynamesPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    

  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
