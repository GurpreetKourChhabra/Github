import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule} from '@angular/forms';
import { SearchComponent } from './modal/search/search.component';
import { FilterPipe } from './modal/search/filter.pipe';
import { ModalService } from './modal/modal.service';
import { StartDateModule } from './modal/start/startDate.module';
import { EndDateModule } from './modal/end/endDate.module';
import { ClickOutsideModule } from 'ng4-click-outside';
import { NgrxComponent } from './modal/ngrx/ngrx.component';
import { StoreModule } from '@ngrx/store';
// import { freelancersReducer} from './modal/ngrx/reducers';
import {reducer} from './modal/ngrx/reducers';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FilterPipe,
    ModalComponent,
    NgrxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StartDateModule,
    EndDateModule,
    ClickOutsideModule,
    StoreModule.forRoot({ message: reducer})
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
