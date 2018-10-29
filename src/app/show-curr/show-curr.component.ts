import { CurrencyService } from './../currency.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Currency } from '../currency';
import {HttpClient} from "@angular/common/http";
// import * as _ from 'lodash';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-show-curr',
  templateUrl: './show-curr.component.html',
  styleUrls: ['./show-curr.component.css']
})
export class ShowCurrComponent implements OnInit {
  currencies$: Observable<[Currency]>; 
  
  constructor(private cs: CurrencyService) {
  }


  ngOnInit() {
      this.currencies$ = this.cs.getCurrencies()
      // Alternative wenn kein async pipe benutzt wird!!!
      // .subscribe((data) => {
      //   this.currencies = data;
      //   console.log(data)
      // });;
      // console.log(this.currencies)
  }

}
// TODO: implement details page
// ngOnInit() {
//   this.hero$ = this.route.paramMap.pipe(
//     switchMap((params: ParamMap) =>
//       this.service.getHero(params.get('id')))
//   );
// }


// interface Course {
//     description: string;
//     courseListIcon:string;
//     iconUrl:string;
//     longDescription:string;
//     url:string;
// }
