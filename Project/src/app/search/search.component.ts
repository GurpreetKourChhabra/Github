import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  word: string;
  language: string;
  meanings: any = [];
  previousSearch: any = [];
  displayMeaning: boolean = false;
  apidata: any;
  searchWord: string;
  loading: boolean = false;
  dataNotFound: boolean = false;
  constructor(private service: HomeService) {
    this.service.getPreviousData().subscribe(data => {
      console.log(data);
      this.previousSearch = data;
    });
  }

  ngOnInit() {
  }
  getData() {
    this.loading = true;
    this.service.getData(this.word , this.language).subscribe(data => {

      if(data.text == this.word) {
        this.displayMeaning = false;
        this.loading = false;
        this.dataNotFound = true;
      }
      else {
        console.log(data);
        this.apidata = data;
        this.searchWord = this.word;
        this.loading = false;
        this.displayMeaning = true;
        this.service.insertWordInDb(this.word , data.text[0]).subscribe(data => {
        });
      }
    });
  }
}
