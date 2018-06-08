import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { Http, Response,Jsonp, Headers, RequestOptions } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';
@Injectable()

export class HomeService {


    constructor(private http: Http) {

    }

    getData(word , language): Observable<any> {
        var _url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180311T112947Z.766e2583595438f7.e36ebef6ca97324cdc2d51c78bf9b7f60715095c&text="+word+"&lang=en-"+language;
        return this.http.get(_url)
          .map((resp: Response) =>(resp.json()));
    }

    insertWordInDb(word , language): Observable<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'
         });
        let options = new RequestOptions({ headers: headers });
        var user = {
            id: null,
            
            word_in_english: word,
            translation: language

        };
        console.log(user);
        var _url = "http://localhost:4000/insertWordInDb";
        return this.http.post(_url, user, options);
    }


    getPreviousData(): Observable<any> {
        var _url = "http://localhost:4000/getPreviousData";
        return this.http.get(_url)
          .map((resp: Response) =>(resp.json()));
    }
}
