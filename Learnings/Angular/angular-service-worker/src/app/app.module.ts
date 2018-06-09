import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { WorkerAppModule } from '@angular/platform-webworker';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { BComponent } from './b/b.component';

@NgModule({
  declarations: [
    AppComponent,
    BComponent
  ],
  imports: [
    // WorkerAppModule,
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent , BComponent]
})
export class AppModule { }
