import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { DisplayDetailComponent } from './display-detail/display-detail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { student } from './store/reducer';
import { EditStudentComponent } from './edit-student/edit-student.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonDetailComponent,
    DisplayDetailComponent,
    EditStudentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({student}),
    // EffectModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
