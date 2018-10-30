import { CurrencyService } from './../currency.service';
import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import { Currency } from '../currency';

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
      // Alternative if no async pipe is used!!!
      // .subscribe((data) => {
      //   this.currencies = data;
      //   console.log(data)
      // });;
      // console.log(this.currencies)
  }

}

