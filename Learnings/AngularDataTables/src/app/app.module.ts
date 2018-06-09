import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { CommonModule } from '@angular/common'
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ServerTableComponent } from './server-table/server-table.component';
import { MatTableModule ,MatSortModule,MatInputModule, MatFormFieldModule ,MatPaginatorModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FullCalendarModule } from 'ng-fullcalendar';
import { MaterialTableComponent } from './material-table/material-table.component';
import {AgGridModule} from "ag-grid-angular/main";
import { AgiGridComponent } from './agi-grid/agi-grid.component';
import { MyGridApplicationComponent } from './Ag-grid/ag-grid.component';
import { MyGridApplicationService } from './Ag-grid/ag-grid.service';
import { CalendarsComponent } from './calendar/calendar.component';
import { CalendarService } from './calendar/calendar.service';
import { CalendarModule } from 'angular-calendar';
import { AngularcalendarComponent } from './angularcalendar/angularcalendar.component';
import {AppService} from './app.service';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    ServerTableComponent,
    MaterialTableComponent,
    AgiGridComponent,
    MyGridApplicationComponent,
    CalendarsComponent,
    AngularcalendarComponent,
    BarchartComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    AgGridModule.withComponents([])
    // AgGridModule.forRoot()
  ],
  providers: [ MyGridApplicationService ,CalendarService,AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
