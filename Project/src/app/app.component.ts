import { Component  , OnInit, ViewEncapsulation, ViewChild, TemplateRef} from '@angular/core';
import { HomeService } from './home/home.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // encapsulation: ViewEncapsulation.Native,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  @ViewChild ('modalTemp') modalTemp;
  @ViewChild ('modalC') modalC;


  modalContent: any;
  constructor(private service: HomeService) {
    this.test();

  }
  test() {
    this.modalContent = this.modalC;

  }
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCPvKxqrPYx7y45JJTi4H7d8nonci9QsN8",
      authDomain: "language-translation-c406b.firebaseapp.com",
    });
  }
}
