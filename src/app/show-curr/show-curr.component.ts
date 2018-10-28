import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
// import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-show-curr',
  templateUrl: './show-curr.component.html',
  styleUrls: ['./show-curr.component.css']
})
export class ShowCurrComponent implements OnInit {
  currencies: Observable<any>;
  URL = 'https://api.coinmarketcap.com/v1/ticker/';
  constructor(private http:HttpClient) {
  }

  ngOnInit() {
      this.currencies = this.http
          .get<any[]>(this.URL)
          // .pipe(
          //   map((res) => res)
          // );
  }

}


// interface Course {
//     description: string;
//     courseListIcon:string;
//     iconUrl:string;
//     longDescription:string;
//     url:string;
// }
