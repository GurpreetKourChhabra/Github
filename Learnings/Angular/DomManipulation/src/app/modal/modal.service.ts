import { Injectable } from '@angular/core';
import {Subject} from 'rxJs/Subject';
import {Observable} from 'rxJs';

@Injectable()
export class ModalService {

    start: any;
    startSub: Subject<any> = new Subject<any>();
    testOb: Observable<any> = new Observable<any>(observer => {
      console.log(observer);
        observer.next(43);
        observer.next(44);
    });
    // startSub: Observable<any> = new Observable<any>();
    // startSub: Observable<any>;


    startDate = {
        year: null,
        month: null,
        day: null
    };
    endDate = {
        year: null,
        month: null,
        day: null
    };
    city;

    setStartDate(date) {
        this.startDate.year = date.year;
        this.startDate.month = date.month;
        this.startDate.day = date.day;
        this.startSub.next(this.startDate);
        this.getEndDate();
}

    getEndDate() {
      this.testOb.subscribe(data => {
        console.log(data);
      });
      this.testOb.subscribe(data => {
        console.log(data);
      });
        return this.endDate;
    }
    setEndDate(date) {

        this.endDate.year = date.year;
        this.endDate.month = date.month;
        this.endDate.day = date.day;
    }

};
