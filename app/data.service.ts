import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class DataService { 
  words: Object[];
  records: Object[];

  constructor(private http: Http) { }

  getWords(): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('https://xyz-server.herokuapp.com/api/words').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }

  getQuestion(): Promise<Object[]>{
    return new Promise(resolve => {
      this.http.get('data/test.json').subscribe(res => {
        resolve(res.json());
      });
    }) 
  }
}