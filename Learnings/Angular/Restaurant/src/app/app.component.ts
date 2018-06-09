import { Component , OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    loadedFeature = 'recipe';

    ngOnInit() {
        firebase.initializeApp({
            apiKey: "AIzaSyCUd-Q_BmKP3demHbf7r6itFMVqWz0qtF8",
            authDomain: "recipe-45fff.firebaseapp.com",
        });
    }
    onNavigate(feature:string) {
        this.loadedFeature = feature;
    }
}
