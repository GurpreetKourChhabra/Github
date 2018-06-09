import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Http, Response,Jsonp, Headers, RequestOptions } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
@Injectable()

export class HomeService {

    barchart: any =[];
    piechart: any =[];
    constructor(private http: Http , private jsonp: Jsonp) {

    }

    getData(word , language): Observable<any> {
        var _url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180311T112947Z.766e2583595438f7.e36ebef6ca97324cdc2d51c78bf9b7f60715095c&text="+word+"&lang=en-"+language;
        return this.http.get(_url)
          .map((resp: Response) =>(resp.json()));
    }

    getDistinctNames() {
        var _url = "http://localhost:4000/getDistinctNames";
        var _this = this;
        return this.http.get(_url)
          .map((resp: Response , index) => {
              resp.json().map(function(data , index) {
                  let obj = {
                      id: index,
                      label: data.first_name ,
                      value1: data.WORD_COUNT
                  }
                  _this.barchart.push(obj);
              });
              return _this.barchart;
          });
    }

    getDataByGender() {
        var _url = "http://localhost:4000/getDataByGender";
        var _this = this;
        return this.http.get(_url)
          .map((resp: Response , index) => {
              let sum = resp.json()[0].USER_COUNT + resp.json()[1].USER_COUNT;
              resp.json().map(function(data , index) {
                  let obj = {
                      id: index,
                      label: data.gender ,
                      value: Math.ceil((data.USER_COUNT * 100) / sum),
                      color: (index % 2 === 0) ? 'red': 'black'
                  }
                  _this.piechart.push(obj);
              });
              return _this.piechart;
          });
    }

    insertUser() {
        let headers = new Headers({
            'Content-Type': 'application/json'
         });
        let options = new RequestOptions({ headers: headers });
        var user = {
            username: "User Entered",
            first_name: "Test User",
            last_name: "One",
            gender: "Male",
            password: "ertjdfhkfdgfgk83743hkhjks9898349843",
            status: 1
        };
        var _url = "http://localhost:4000/addUser";
        return this.http.post(_url, user, options);
    }

    getSunburstData() {
        var _url = "http://localhost:4000/getSunburstData";
        return this.http.get(_url)
          .map((resp: Response) =>{resp.json();
          console.log(resp.json())});
    }
}
