import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // worker: Worker;

  constructor() {
    // this.worker = new Worker("./worker.ts");
  }
}
