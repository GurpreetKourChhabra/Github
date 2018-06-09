import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { HomeService } from './home/home.service';
import { HttpModule , Http} from '@angular/http';
import { DoughnutChartComponent, PieChartComponent, BarChartComponent } from 'angular-d3-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    DoughnutChartComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    JsonpModule,
    HttpModule
  ],
  providers: [HomeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
