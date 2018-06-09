import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  states = ['Indore', 'Bhopal','Jaipur','Udaipur','Pune','Bangalore','Mumbai','Nagpur'];
  searchState:boolean = false;
  searchValue='';

  constructor(private service: ModalService) {
   }

  ngOnInit() {
  }

  searchCity() {
      this.searchState = !this.searchState;
  }
  getCity(city) {
      this.searchState = !this.searchState;
      this.searchValue = city;
      this.service.city = city;
  }
  onClickedOutside($event) {
      console.log("hello");
      // this.searchState = !this.searchState;
  }
}
