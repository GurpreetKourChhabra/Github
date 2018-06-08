import { Component, OnInit } from '@angular/core';
import { HomeService} from '../home/home.service';

@Component({
  selector: 'app-lightswitch-comp',
  template: '<button (click)="clicked()">Click me!</button><span>{{message}}</span>',
   styleUrls: ['./lightswitch-comp.component.scss']
})

export class LightswitchCompComponent implements OnInit {

isOn = false;
clicked() { this.isOn = !this.isOn; }
get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  constructor(private service: HomeService) { }

  ngOnInit() {
  }

}
